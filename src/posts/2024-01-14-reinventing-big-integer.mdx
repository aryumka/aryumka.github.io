---
title: "[바퀴의 재발명] BigInteger"
categories: dev
tags: [Kotlin, BigInteger]
series: '바퀴의 재발명'
cover: ''
image: '/images/og.png'
comments: true
draft: false
hide: false
---

개발 업계에서 바퀴를 다시 만들지 말라는 말을 흔히 들을 수 있다. 이는 보편적으로 오버엔지니어링을 하지말라는 의미로 볼 수 있지만 공부를 하는 측면에선 바퀴를 재발명해볼 가치가 있다. 평소 별 생각 없이 쓰던 것들을 분해하고 다시 구현해봄으로 CS 원리에 대한 이해와 지식을 얻을 수 있기 때문이다. 

여기에 더불어 기존의 것을 기반으로 새로운 것을 만들 수 있는 능력도 얻고 싶다는 기대로 이 시리즈를 시작해보려 한다.

첫 시작은 [BigInteger](https://docs.oracle.com/en/java/javase/12/docs/api/java.base/java/math/BigInteger.html#multiply(java.math.BigInteger))로 정했다. 평소 회사에서 큰 수를 다루는 상황이 많아 BigInteger를 많이 사용하는 데 실제로 어떻게 동작하는지는 잘 몰랐기 때문에 이번 기회에 내부 동작 원리를 파악하고자 한다.

## BigInteger란?
Long 범위를 넘어가는 큰 범위의 수 연산을 할 수 있도록 지원하는 클래스이다. Java의 BigInteger는 기본적으로 Integer에서 제공하는 기본적 기능들을 지원한다. 
## 구현 과정
### 구현할 메서드
우선 클라이언트에게 필요할 대략적인 인터페이스를 먼저 README에 정의하며 인터페이스 설계를 시작했다.
처음에는 사칙연산과 toString() 정도로 시작했지만 구현과정에서 자연스럽게 확장될 수밖에 없었다.
> 처음 생각한 인터페이스
> - String을 인자로 받는 기본 생성자
> - Long, Int, String를 인자로 받는 팩토리
> - 덧셈(plus)
> - 뺄셈(minus)
> - 곱셈(times)
> - 나눗셈(div)
> - 나머지(rem)
> - toString()

### 성능
기본적으로 문자열을 연산하기 때문에 실제 숫자를 연산하는 것보다 훨씬 느리다. 구현한 주요기능들의 시간복잡도는 각 덧셈, 뺄셈은 O(n), 곱셈은 O(n^2), 나눗셈은 O(n^2) ~ O(n^3)다.

### 테스트 작성과 코드 구현
구현에 앞서 먼저 정의된 인터페이스를 사용하는 테스트들을 만들었다.
컴파일은 되지만 실패하는 메서드를 만들 때 코틀린의 TODO() 메서드가 빛을 발했다.

TDD 방식으로 개발을 하다보니 이런 케이스도 있지 않을까? 라는 생각이 계속 떠올랐다.

예를 들어 minus를 만들면서 [빼기를 당하는 쪽이 더 작은 테스트 케이스](https://github.com/aryumka/BigInteger.kt/commit/ae00155354ebb98e9f41659ebe3a9947363dbc34
)도 필요하지 않을까? 같은 의문이다.

의문이 생기면 바로 테스트를 만들어 검증하며 진행했다. 통과하지 못하는 테스트들은 통과하게 만들었다.

위와 같은 생각으로 빼기를 만들다보니 부호(sign)를 먼저 만들어야겠다는 생각이 들었다. 부호는 BigInteger 클래스 안의 Enum 클래스로 만들었다. 
부호를 만들다보니 '-123456789'같은 단항연산자(Unary Operator)도 필요하겠다는 생각까지 미치게 되었다. 
위와 같은 생각의 흐름을 모두 테스트로 작성 뒤 구현하였다.

#### 코틀린의 연산자 오버로딩
[코틀린에서는 연산자를 재정의할 수 있게 해준다.](https://kotlinlang.org/docs/operator-overloading.html)
즉 직접 구현한 메서드를 a.plus(b)가 아닌 a + b로 사용할 수 있다.
가능한 연산자는 크게 아래 두가지로 나뉜다.
> **단항연산자(unary operator)**
+, -, ++, -- 등 하나의 항에 적용되는 연산자
**이항연산자(binary operator)**
기본적인 산술연산자를 포함하여 포함(contains()), 인덱스, 비교(==, \<, >)와 증감연산자(+=, -=) 등 두 개의 항에 적용되는 연산자

처음에는 문자열로만 생성해 간단한 int 연산만을 테스트했으나 Long끼리 계산하는 경우 등 점점 복잡한 테스트케이스를 추가해갔다. 
구현하는 내내 빨간불을 초록불로 만드는 작업은 매우 매우 재밌고 희열감을 주는 작업이었다.

최종적으로 완성된 인터페이스는 다음과 같았다.
> - String을 인자로 받아 유효성 검사 뒤 부호(sign)도 함께 할당하는 생성자
> - Long, Int, String를 인자로 받는 팩토리
> - 덧셈(plus)
> - 뺄셈(minus)
> - 곱셈(times)
> - 나눗셈(div)
> - 나머지(rem)
> - `+` (unaryPlus)
> - `-` (unaryMinus)
> - 절대값(abs)
> - toString()
> - compareTo()
> - equals()

## 배운 점
- TDD를 적용, 다양한 케이스들을 즉시 검증하며 구현했다. **눈에 보이지 않는 불안감을 해결 가능하고 눈에 보이는 결과물로 만드는 게 중요하다고 느꼈다.**

- String으로 계산하는 건 마치 손으로 써서 계산하는 과정을 코드로 구현하는 기분이었다. 검색해보니 이미 이를 부르는 grade-school(초등학교) 알고리즘이라는 공식적인 용어도 있었다.
큰 수에 대해 시간복잡도를 개선할 수 있는 알고리즘도 있었다. 예를 들어 곱셈의 경우 대표적으로 [카라추바 알고리즘](https://ko.wikipedia.org/wiki/%EC%B9%B4%EB%9D%BC%EC%B6%94%EB%B0%94_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98)이 있는데 이는 성능을 O(n^log(3)/log(2))까지 개선할 수 있는 분할, 정복 방법이라고 한다.

## 결과
완성된 BigInteger.kt는 아래와 같다.
```kotlin
package aryumka.biginteger

class BigInteger(value: String) {
  val integer: String
  val sign: Sign

  init {
    if (value.isEmpty()) {
      throw IllegalArgumentException("value must not be empty")
    }
    if (!value.matches(Regex("^[+-]?[0-9_]+$"))) {
      throw IllegalArgumentException("value must be a number")
    }
    if (value.startsWith("-") || value.startsWith("+")) {
      this.integer = value.substring(1).replace("_", "")
      this.sign = if (value.startsWith("-")) Sign.NEGATIVE else Sign.POSITIVE
    } else {
      this.integer = value.replace("_", "")
      this.sign = Sign.POSITIVE
    }
  }

  // Factory methods
  companion object {
    fun of(value: String): BigInteger {
      return BigInteger(value)
    }

    fun of(value: Int): BigInteger {
      return BigInteger(value.toString())
    }

    fun of(value: Long): BigInteger {
      return BigInteger(value.toString())
    }
  }

  // Plus
  private fun plus(other: String): BigInteger {
    var result = ""
    var carry = 0
    var valueLength = this.integer.length - 1
    var otherLength = other.length - 1

    while (valueLength >= 0 || otherLength >= 0 || carry > 0) {
      val valueDigit = if (valueLength >= 0) this.integer[valueLength] - '0' else 0
      val otherDigit = if (otherLength >= 0) other[otherLength] - '0' else 0

      val sum = valueDigit + otherDigit + carry

      result += (sum % 10)
      carry = sum / 10

      valueLength--
      otherLength--
    }

    return BigInteger(result.reversed())
  }

  operator fun plus(other: Int): BigInteger =
    this.plus(other.toString())

  operator fun plus(other: Long): BigInteger =
    this.plus(other.toString())

  operator fun plus(other: BigInteger): BigInteger =
    this.plus(other.integer)



  // Minus
  operator fun minus(other: Int): BigInteger =
    this.minus(other.toString())

  operator fun minus(other: Long): BigInteger =
    this.minus(other.toString())

  operator fun minus(other: BigInteger): BigInteger =
    this.minus(other.integer)

  private fun minus(other: String): BigInteger {
    var result = ""
    var carry = 0

    //find out which is bigger
    var minuend = ""
    var subtrahend = ""
    var sign = ""

    if (this < BigInteger(other)) {
      minuend = other
      subtrahend = this.integer
      sign = "-"
    } else if (this > BigInteger(other)) {
      minuend = this.integer
      subtrahend = other
      sign = ""
    } else {
      return BigInteger("0")
    }

    var minuLength = minuend.length - 1
    var subLength = subtrahend.length - 1
    while (minuLength >= 0 || subLength >= 0 || carry > 0) {
      var minuDigit = if (minuLength >= 0) minuend[minuLength] - '0' else 0
      val subDigit = if (subLength >= 0) subtrahend[subLength] - '0' else 0

      if (minuDigit < subDigit) {
        minuDigit += 10
      }

      val diff = minuDigit - subDigit - carry

      carry = if (minuDigit >= 10) {
        1
      } else {
        0
      }

      result += diff % 10

      minuLength--
      subLength--
    }

    return BigInteger(sign + result.reversed().trimStart('0'))
  }

  // Times
  operator fun times(other: Int): BigInteger =
    this.times(other.toString())

  operator fun times(other: Long): BigInteger =
    this.times(other.toString())

  operator fun times(other: BigInteger): BigInteger =
    this.times(other.toString())

  private fun times(other: String): BigInteger {
    var results = mutableListOf<String>()
    var carry = 0
    var valueLength = this.integer.length - 1
    var otherLength = other.length - 1

    var result = ""

    for (i in otherLength downTo 0) {
      val otherDigit = other[i] - '0'
      for (j in valueLength downTo 0) {
        val valueDigit = this.integer[j] - '0'

        val sum = valueDigit * otherDigit + carry

        result += (sum % 10)

        carry = sum / 10
      }
      if (carry > 0) {
        result += carry
        carry = 0
      }
      results.add(result.reversed())
      result = ""
    }

    return results.mapIndexed { index, s ->
      s.padEnd(s.length + index, '0')
    }.map { BigInteger(it) }.reduce { acc, bigInteger ->
      acc + bigInteger
    }
  }
  // Div
  operator fun div(other: Int): BigInteger =
    this.div(other.toString())

  operator fun div(other: Long): BigInteger =
    this.div(other.toString())

  operator fun div(other: BigInteger): BigInteger =
    this.div(other.toString())

  private fun div(other: String): BigInteger {
    var result = ""
    var sign = if (this.sign == BigInteger(other).sign) "" else "-"
    var remainder = BigInteger(this.integer)
    val divisor = BigInteger(other)

    if (other == "0") {
      throw ArithmeticException("Division by zero")
    }

    var count = 0
    while (remainder >= divisor * of(count + 1)) {
      count++
    }
    remainder -= divisor * of(count)
    result += count

    return BigInteger(sign + result)
  }

  // Rem
  operator fun rem(other: Int): BigInteger =
    this.rem(other.toString())

  operator fun rem(other: Long): BigInteger =
    this.rem(other.toString())

  operator fun rem(other: BigInteger): BigInteger =
    this.rem(other.toString())

  private fun rem(other: String): BigInteger {
    var sign = if (this.sign == BigInteger(other).sign) "" else "-"
    var remainder = BigInteger(this.integer)
    val divisor = BigInteger(other)

    if (other == "0") {
      throw ArithmeticException("Division by zero")
    }

    var count = 0
    while (remainder >= divisor * of(count + 1)) {
      count++
    }

    remainder -= divisor * of(count)

    return BigInteger(sign + remainder.integer)
  }

  // Unary
  operator fun unaryPlus(): BigInteger =
    this

  operator fun unaryMinus(): BigInteger =
    BigInteger(if (this.sign == Sign.POSITIVE) "-${this.integer}" else this.integer)

  override fun equals(other: Any?): Boolean =
    when (other) {
      is BigInteger -> this.toString() == other.toString()
      is String -> this.toString() == other
      is Int -> this.toString() == other.toString()
      is Long -> this.toString() == other.toString()
      else -> false
    }

  operator fun compareTo(other: BigInteger): Int =
    when {
      this.sign == Sign.POSITIVE && other.sign == Sign.NEGATIVE -> 1
      this.sign == Sign.NEGATIVE && other.sign == Sign.POSITIVE -> -1
      this.sign == Sign.POSITIVE && other.sign == Sign.POSITIVE -> {
        if (this.integer.length > other.integer.length) 1
        else if (this.integer.length < other.integer.length) -1
        else this.integer.compareTo(other.integer)
      }
      this.sign == Sign.NEGATIVE && other.sign == Sign.NEGATIVE -> {
        if (this.integer.length > other.integer.length) -1
        else if (this.integer.length < other.integer.length) 1
        else this.integer.compareTo(other.integer)
      }
      else -> 0
    }

  override fun toString(): String = if (this.sign == Sign.POSITIVE) this.integer else "-${this.integer}"
  fun abs(): BigInteger = BigInteger(this.integer)

  enum class Sign {
    POSITIVE, NEGATIVE
  }
}
```
테스트 코드를 포함한 [전체 코드 깃헙 저장소](https://github.com/aryumka/BigInteger.kt).

## 아쉬운 점
- 부호를 Enum이 아닌 정수로 표현할수 있지 않았을까? 곱셈, 나눗셈 연산을 할 때다 if문을 통해 비교한 코드가 조금 맘에 걸린다. 양수는 0, 음수는 1로 논리곱으로 구현하면 될 것 같은데. 
실제로도 컴퓨터에서 수를 표현 시 non-negative를 0으로 negative를 1로 표현하기도 한다고 한다.

- 아규먼트만 바뀌는데 중복코드가 너무 많은 것 같다.
시간을 내서 [data-driven test](https://wooooooak.github.io/%EB%B2%88%EC%97%AD%ED%95%98%EB%A9%B0%20%EA%B3%B5%EB%B6%80%ED%95%98%EA%B8%B0/2021/01/04/kotest_data_driven_testing/)로 리팩토링해야겠다. 

- 여유가 생기면 성능 개선 후 power나 Augmented assignment도 구현해야겠다.
