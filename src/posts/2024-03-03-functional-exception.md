---
title: "[TIL] 예외를 함수로 처리"
categories: dev
tags: [TIL, Kotlin]
series: ''
cover: ''
image: '/images/og.png'
comments: true
draft: false
hide: false
---

이런 유틸을 만들어놓고
```kotlin
fun <T> T?.throwIfNull(throwable: Throwable): T =
  this ?: throw throwable

inline fun <T> T.throwIf(throwable: Throwable, predicate: (T) -> Boolean): T =
  if (predicate(this)) throw throwable else this

fun <T> T?.defaultIfNull(default: T): T =
  this ?: default

inline fun <T> T?.defaultIfNull(block: () -> T): T =
  this ?: block()
```
이렇게 사용하면 코드를 위에서부터 아래로 차례로 읽을 수 있어 가독성이 올라간다.
```kotlin
fun getMember(id: MemberId): MemberDTO =
  this.memberRepository
    .findById(id)
    .throwIfNull(MemberNotFoundException("멤버를 찾을 수 없습니다."))
    .let(MemberDTO::from) 
```

