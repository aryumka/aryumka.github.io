---
title: "[JVM 톺아보기] 코틀린의 리플렉션(Reflection)"
categories: dev
tags: [JVM, Kotlin, Reflection]
series: 'JVM 톺아보기'
cover: ''
image: 'https://velog.velcdn.com/images/aryumka/post/c9d716a4-0eef-4663-90e1-69631029d564/image.png'
comments: true
draft: false
hide: false
---

## 리플렉션이란?
런타임에 동적으로 클래스의 인스턴스를 **생성 및 조작**할 수 있는 기술이다. 리플렉션을 사용하면 클래스에 대한 정보를 미리 알지 못해도 객체를 조작할 수 있다.

주로 프로그램 내 특정 클래스나 함수에 대해 알지 못하는 라이브러리나 프레임워크 등에서 런타임에 동적으로 객체를 생성, 조작, 참조할 때 사용된다 (일반적인 코드를 작성할 때는 이미 클래스들의 정보를 알고 있으므로 사용할 일이 거의 없다).
대표적으로 스프링에서 빈을 생성, 주입할 때 리플렉션을 사용한다. 

## 리플렉션의 작동원리
이게 어떻게 가능한걸까?
JVM 기반 언어에서 리플렉션 API는 컴파일 후 런타임에 로드된 **JVM의 스태틱 영역(메서드 영역 또는 클래스 영역)에 접근**하여 일급시민들의 메타데이터를 조작하기 때문이다.

따라서 클래스나 함수의 이름만 알고 있다면 클래스의 생성자, 메서드, 멤버와 속성들까지도 거의 무한에 가까운 자유도로 객체를 제어할 수 있다.

예를 들어 아래와 같은 private 생성자를 가진 클래스를
```kotlin
class Foo private constructor(private val name: String = "Foo"){
    override fun toString(): String {
        return "Foo(name='$name')"
    }
}
```
아래와 같이 접근성을 조작하여 직접 생성할 수도 있다.
```kotlin
fun main() {
    val ctor = Foo::class.primaryConstructor
    ctor?.isAccessible = true
    val foo = ctor?.call("Bar")
    println(foo) //Foo(name='Bar')
}
```

## 코틀린 리플렉션 API
### gradle 의존성 추가
코틀린은 자바 리플렉션 `java.lang.reflect`과 코틀린 리플렉션 `kotlin.reflect`의 두 가지 방식을 제공한다.
자바에 존재하지 않는 nullable 타입이나 속성 등을 리플렉션하기 위해 아래와 같이 별도의 의존성을 추가해주어야 한다.
```kotlin
//gradle
dependencies {
    implementation(kotlin("reflect"))
}
```
코틀린의 리플렉션 API는 코틀린 뿐만이 아닌 다른 JVM 기반 언어들과 호환된다.
### 리플렉션이 가능한 대상
![](https://velog.velcdn.com/images/aryumka/post/2352d0a0-9fa0-44c9-b037-acec8dcd887e/image.png)
코틀린 리플렉션은 위와 같은 계층구조를 갖고 있다.
클래스의 리플렉션인 `KClass`, 함수 `KFunction`와 변수`KProperty`, 그리고 이들을 포함하는 `KCallable`과 `KParameter`로 이루어져 있다


#### 클래스
```kotlin
val c = MyClass::class
println(c.simpleName) //클래스 이름 출력
println(c.qualifiedName) //패키지 경로를 포함한 클래스 이름 출력
val ctors = c.constructors //클래스의 생성자들을 모두 가져옴
c.isSealed = false // sealed class인지 여부. 재할당 가능
...
```
`::`를 사용하여 사용해 클래스를 참조하며 위의 예시 이외에도 참조된 클래스를 제어하는 방법이 [KClass API 문서](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-class/)에 자세히 설명되어 있다.
#### 함수
함수도 `::`를 활용하여 KFuntion으로 참조할 수 있다.
```kotlin
val f = ::foo()
f.call("Hello")
f.callBy(mapOf(f.parameters[0] to "Hello"))
f.isInline
f.isExternal
f.visibility
```
리플렉션으로 가져온 함수를 바로 인자로 넘겨줄 수도 있다.
```kotlin
fun isOdd(x: Int) = x % 2 != 0
val numbers = listOf(1, 2, 3)
println(numbers.filter(::isOdd))
```
생성자인 Constructor도 KFuntion타입이다. 
[KFunction API 문서](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-function/)
### 인자
함수의 인자인 `KParameter`도 리플렉션이 가능하다.
```kotlin
val param = MyClass::Class.primaryConstructor!!.parameters.firstOrNull()
param.name
param.type
param.isOptional
param.isVararg
param.index
param.annotations
```
[KParameter API 문서](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-parameter/)
#### 변수
변수도 위와 같이 제어가 가능하다. val로 선언된 변수도 수정이 가능하다.
[KProperty API 문서](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-property/)
## 주의할 점
- 동적으로 생성되기 때문에 예측이 어렵다. 어떤 객체가 생성되며 어떤 메서드가 호출될 지. 따라서 컴파일타임과 런타임 시에 JVM 최적화가 어렵다. 
- 런타임에 조작된 속성은 실행 중 계속 유지된다. 따라서 accessibility등을 조작 시 보안 이슈가 발생할 수 있다.
- 플랫폼 종속적이다. 리플렉션을 사용하여 만든 프로그램은 jvm 위에서만 동작한다. 