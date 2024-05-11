---
title: "[TIL] aws 탄력적 ip + Docker 사용해보기"
categories: dev
tags: [TIL, AWS, Docker]
series: ''
cover: ''
image: '/images/og.png'
comments: true
draft: false
hide: false
---

### aws 탄력적 ip 설정
인스턴스를 껐다 켰다 할 때마다 ip가 바뀌어서 너무 불편했다. 고정 ip를 생성해봤다. 너무너무 간단하다.
인스턴스 > 네트워크 및 보안 > 탄력적 ip에서 생성
![](https://velog.velcdn.com/images/aryumka/post/285832a5-29dd-4373-97ae-d3e1449495ea/image.png)
현재 ec2 인스턴스와 연결
![](https://velog.velcdn.com/images/aryumka/post/fce6cadf-f831-46c9-b225-d01bb70181a4/image.png)
성공!
![](https://velog.velcdn.com/images/aryumka/post/74dd0c4d-5c12-49aa-86e0-6c613e3dea22/image.png)

### Docker 사용해보기
사용중인 OS는 윈도우지만 git Bash를 인텔리제이의 기본 터미널로 설정해주었다.
![](https://velog.velcdn.com/images/aryumka/post/4a7e1723-d886-4475-81d7-969eba5185f3/image.png)

먼저 프로젝트 루트에 dockerfile을 만들어준다. dockerfile은 확장자가 없다.
```
FROM openjdk:19
CMD ["java", "-jar", "./build/libs/vc-erp-0.0.1-SNAPSHOT.jar"]
```
`FROM` - 베이스 이미지이다.  
`CMD` - 컨테이너가 시작할 때 실행할 명령어이다.
아래 명령어를 실행하여 도커 빌드를 해줬다.
```
$ docker build . -t springbootapp
```
![](https://velog.velcdn.com/images/aryumka/post/36ab57eb-4491-4564-b98d-80c168270d02/image.png)
그리고 실행하기 위해 다음 명령을 입력했다.
```
$ docker run springbootapp
```
![](https://velog.velcdn.com/images/aryumka/post/7e7cc0e4-5d28-4ccc-adc0-74fd1f21e6fa/image.png)

위와 같은 에러가 난다.
위와 같이 도커에서 해당 어플리케이션을 실행하기 위해서는 빌드한 jar가 도커 컨테이너 안에 있어야 하기 때문이다. 그러나 위 명령어를 통해 빌드한 파일은 현재 내 PC에만 존재한다. 따라서 위 파일을 컨테이너로 copy해주어야 한다. 
~~원격 서버에 빌드된 jar를 배포하는 것과 비슷하다.~~
```
COPY ./build/libs/vc-erp-0.0.1-SNAPSHOT.jar /build/libs/vc-erp-0.0.1-SNAPSHOT.jar
```
[명령어] [현재파일경로] [복사할경로] 순으로 적어준다.

다시 빌드 후 실행하면 일단 jar 실행은 잘 된다.
![](https://velog.velcdn.com/images/aryumka/post/82bdd78f-b619-4ec7-b254-2fb034763223/image.png)

하지만 위의 jar가 실행이 안되었던 것과 비슷한 이유로 외부에서 컨테이너의 어플리케이션에 접근하기 위해서는 컨테이너의 포트를 열어줘야 한다.
```
$ docker run -p 50000:8080 springbootapp
```
run 명령에 위와같은 -p [로컬 포트번호]:[외부포트] 옵션을 추가해준다

http://localhost:8080 에 잘 접속된다.
```
WORKDIR /usr/src/app
```
working directory는 위 명령어로 설정해준다. 설정 후 복사될 경로, 실행파일 경로 등을 상대경로로 바꾸어준다(./~~). 
```
$ docker run -p 50000:8080 -v $(pwd):/usr/src/app springbootapp
```
실행 시 volume을 설정할 수도 있다.
volume: volume을 설정하면 호스트머신의 로컬의 파일을 컨테이너가 사용할 수 있으며 컨테이너끼리 데이터를 공유할 수도 있다.

최종 dockerfile은 아래와 같다.
```
FROM openjdk:19
WORKDIR /usr/src/app
COPY ./build/libs/vc-erp-0.0.1-SNAPSHOT.jar ./build/libs/vc-erp-0.0.1-SNAPSHOT.jar
CMD ["java", "-jar", "./build/libs/vc-erp-0.0.1-SNAPSHOT.jar"]
```