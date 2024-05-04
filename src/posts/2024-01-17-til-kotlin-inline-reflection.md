---
title: "[TIL] 코틀린 inline, reflection"
categories: dev
tags: [TIL, Kotlin]
series: ''
cover: ''
image: 'https://velog.velcdn.com/images/aryumka/post/14ac2014-f469-4a23-b3cd-d95c2e912efe/image.png'
comments: true
draft: false
hide: false
---

고차함수는 비싸다. 객체로 변환한 함수(Function)를 쓰기 때문이다.
inline function을 쓰면 객체변환 대신 컴파일 시 코드라인을 추가해준다.

코틀린의 [리플렉션](https://kotlinlang.org/docs/reflection.html#constructor-references)을 쓸 수 있다.
코틀린 클래스를 가져오려면 Kclass를 쓴다. 
