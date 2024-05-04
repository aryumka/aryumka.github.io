---
title: "[JVM 톺아보기] JVM의 메서드 영역 (feat. PermGen space)"
categories: dev
tags: [JVM, Memory]
series: 'JVM 톺아보기'
cover: ''
image: '/images/og.png'
comments: true
draft: false
hide: false
---

### 의문의 서막: PermGen Space 
```
java.lang.OutOfMemoryError : PermGen space 
```
레거시 시스템에서 java7 또는 이전 버젼을 쓸때 늘 보던 에러다.
```
-XX:PermSize=128m -XX:MaxPermSize=128m
```
위와 같은 `vm arguments`를 넣어 메모리를 늘려주면 해결됐는데 이걸 깜빡할 때마다 OOME가 발생하곤 했다. 
JVM 내 메모리가 부족하다는 정도로만 이해했는데 왜 고정사이즈로 되어있는 건지 또 디폴트 사이즈는 어째 이리 작은건지 어리둥절했다.

이후 사내 솔루션 웹 전환을 맡고 나서는 위 오류를 볼 수 없었고 금새 기억에서 사라졌다. 
그리고 이제 와서야 왜 저 에러를 다시 볼 수 없었는지를 알게 되었다.

이유는 바로 **자바 8 이후로 `PermGen`이 `Metaspace`로 대체되었고 8.0이후에는 자동으로 동적으로 조절되기** 때문이었다. 

### JVM의 메모리 구조

`PermGen`과 `Metaspace`에 대해 알아보기 전에 먼저 간략한 JVM의 메모리 구조부터 정리해보자.

JVM 메모리 풀은 크게 `on-heap`, `off-heap` 두 가지로 나뉜다.

`on-heap` 영역은 우리가 흔히 알고 있는 힙 영역으로 **동적으로** 생성되는 객체들이 저장되는 영역이다. JVM의 메인 영역이라 볼 수 있으며 **GC(가비지 컬렉터)의 주요 관리 대상**이다.

`off-heap` 영역은 메인 힙 영역을 제외한 영역으로 대개 GC의 관리 대상이 아니다. 주로 생명주기가 긴 **정적 데이터**들이 저장된다. 
위에서 언급한 `PermGen`과 `Metaspace`가 바로 여기에 속한다. 그리고 `off-heap` 중에서도 `메서드 영역`에 속한다. 

>** JVM 메모리 풀**
>
>**힙 영역** 일반적인 자바 힙. JVM 실행 중 생성되는 자바 객체들이 저장된다. 모든 JVM 쓰레드에 의해 전역적으로 참조된다.
>**메서드 영역** 클래스, 메서드, 필드 등의 클래스와 관련된 모든 메타데이터, 그리고 런타임 상수 풀(runtime constant pool)이 저장된다. 모든 JVM 쓰레드에 의해 전역적으로 참조된다.
>**코드 캐시** JIT 컴파일러에 의해 컴파일된 코드들이 저장되는 영역이다.
>**네이티브 메모리 영역** OS에 의해 관리되는 가용 시스템 메모리이다.
 
### 메서드 영역
JVM 공식 스펙에서는 `메서드 영역`으로 일컫어지지만 흔히 클래스 정보를 저장하기에 `클래스 영역` 또는 정적인 정보를 저장하기에 `스태틱 영역`이라고 불리기도 한다.

`메서드 영역`은 JVM 실행 후 클래스 로딩 단계에서 클래스로더에 의해 *.class 파일들의 바이트코드가 메모리로 로딩될 때 할당된다. 이 때 JVM의 런타임 데이터 영역(Runtime Data area)에 바이트코드에 담긴 데이타를 배치한다. 

이후 힙 영역의 객체들이 클래스의 메타데이타를 참조할 때 바로 이 `메서드 영역`을 찾아가 참조한다. 
>![](https://velog.velcdn.com/images/aryumka/post/5d229294-1008-49d1-be40-cf13d9f9604c/image.png)
>그림을 통해 최대한 추상적으로 표현해보았다.
>세부 구조는 위와 같이 단순하지 ~~허접하지~~ 않으며 JVM 공식 스펙에서 힙과 `메서드 영역`의 내부 디자인에 대해 관여하지 않기 때문에 벤더마다 상이할 수 있다.

메서드 영역은 다음과 같은 클래스별 정보를 저장한다.
- 클래스로더에 대한 참조
- 런타임 상수 풀(Run Time Constant Pool)
	- 숫자 상수값
	- 필드 참조: 클래스 내부의 필드 참조
	- 메서드 참조: 클래스 내부의 메서드 참조
	- 속성: 클래스 또는 메서드에 대한 부가 정보
- 각 필드의 이름, 타입, 접근제어자, 속성
- 각 메서드의 이름, 리턴 타입, 파라미터 타입 (순서대로), 접근제어자, 속성
- 메서드 코드
	- 바이트코드
	- 피연산자 스택 크기(Operand stack size)
	- 지역 변수 크기
	- 지역 변수 테이블
	- 예외 테이블
    
이렇게 저장된 정보는 런타임동안 계속 존재하며 모든 스레드에 의해 지속적으로 참조된다.
일반적으로는 클래스 메타데이타는 클래스가 로드될 때 정적으로 저장되기 때문에 동시성의 문제가 발생하지 않는다.. ~~리플렉션 등을 통해 프로그램 실행 중 동적으로 바뀌지 않는다면...~~

### 그래서 PermGenSpace와 MetaSpace는 뭐가 다를까

둘 다 메서드 영역이지만 다르다. 가장 큰 차이점은 바로 사용하는 메모리 영역이다.

![](https://velog.velcdn.com/images/aryumka/post/06a9cbce-cb02-4956-8b17-b1d359b9357d/image.png)

`PermGenSpace`는 힙 영역이며 따라서 앞에서 언급했듯 고정된 메모리를 사용, 가능한 최대 크기는 힙의 크기라고 볼 수 있다. 기본 사이즈는 32비트 JVM에서 64 MB, 64비트 버젼에서 82 MB이다.
이와 반대로 `Metaspace`는 네이티브 영역, 즉 OS에 의해 관리되는 메모리에 존재하며 그 크기가 가변적이다. 가능한 최대 크기는 시스템의 가용 메모리가 된다. 

`Metaspace`는 비록 네이티브 영역에 존재하며 상대적으로 용량이 넉넉하지만, 최대 용량이 찰 경우 GC가 발동한다. 참조되지 않는 클래스 메타데이터는 삭제된다.

관련 옵션은 아래와 같은 VM 옵션으로 설정할 수 있다.
- `MetaspaceSize`: 초기 크기를 설정. JVM은 이 크기를 초과하면 `Metaspace`의 크기를 동적으로 조정할 수 있다.
- `MaxMetaspaceSize`: 최대 크기를 설정. `Metaspace`가 이 크기를 초과하면 OutOfMemoryError가 발생.
- `MinMetaspaceFreeRatio`: 가비지 컬렉션 후에 클래스 메타데이터 용량의 최소 비율. 즉, 가비지 컬렉션 이후 특정 비율 이상의 여유 공간이 있어야 한다.
- `MaxMetaspaceFreeRatio`: 가비지 컬렉션 후에 클래스 메타데이터 용량의 최대 비율. 

참고로 `PermGenSpace`의 경우 java 8 이후 제거되면서 관련된 VM 옵션들도 모두 Deprecated되었다.

결론적으로는 시스템 가용메모리를 모두 사용할 수 있고 GC까지 작동하니 메모리 관점에서 아주 편해졌다고 할 수 있다.

하지만 `Metaspace` 또한 언제든 메모리 누수가 발생할 수 있으며 최악의 경우 어플리케이션 뿐만이 아닌 전체 시스템에 영향을 미친다는 점에서 주의를 기울여야 관리해야 한다.

>![](https://velog.velcdn.com/images/aryumka/post/651716c8-bc12-4b2c-a462-06dc5f49cf81/image.png)
>Visual VM에서 확인한 metaspace


### 마치며
리플렉션을 공부하다가 글로 배운 jvm의 메서드 영역이 알고보니 구면이었다니 너무 신기했다. 레가시 시스템을 해봤기에 더욱 와닿았던 것 같다. 
역시 도움이 되지 않는 경험이란 건 없는 듯 하다.


### 출처
https://www.oracle.com/webfolder/technetwork/tutorials/mooc/JVM_Troubleshooting/week1/lesson1.pdf
https://docs.oracle.com/javase/specs/jvms/se8/html/index.html
https://blog.jamesdbloom.com/JVMInternals.html#dynamic_linking
https://www.baeldung.com/java-permgen-metaspace