---
title: "[TIL] Java의 static block vs Kotlin의 companion object"
categories: dev
tags: [TIL, Java, Kotlin]
series: ''
cover: ''
image: '/images/og.png'
comments: true
draft: false
hide: false
---

RestTemplate의 코드를 보던 중 아래와 같은 문법을 발견했다.
```java
	static {
		ClassLoader classLoader = RestTemplate.class.getClassLoader();
		romePresent = ClassUtils.isPresent("com.rometools.rome.feed.WireFeed", classLoader);
		jaxb2Present = ClassUtils.isPresent("javax.xml.bind.Binder", classLoader);
		jackson2Present = ClassUtils.isPresent("com.fasterxml.jackson.databind.ObjectMapper", classLoader) &&
				ClassUtils.isPresent("com.fasterxml.jackson.core.JsonGenerator", classLoader);
		jackson2XmlPresent = ClassUtils.isPresent("com.fasterxml.jackson.dataformat.xml.XmlMapper", classLoader);
		jackson2SmilePresent = ClassUtils.isPresent("com.fasterxml.jackson.dataformat.smile.SmileFactory", classLoader);
		jackson2CborPresent = ClassUtils.isPresent("com.fasterxml.jackson.dataformat.cbor.CBORFactory", classLoader);
		gsonPresent = ClassUtils.isPresent("com.google.gson.Gson", classLoader);
		jsonbPresent = ClassUtils.isPresent("javax.json.bind.Jsonb", classLoader);
		kotlinSerializationJsonPresent = ClassUtils.isPresent("kotlinx.serialization.json.Json", classLoader);
	}
```
코틀린의 companion object와 비슷하게 동작할 것처럼 보여서 찾아봤다.
```kotlin
//kotlin의 companion object 예시
class MyClass {
    companion object {
        init {
            println("Inside Kotlin companion object init block")
        }

        fun someFunction() {
            println("Inside Kotlin companion object function")
        }
    }
}
```

그러나 실제 작동방식은 다르다고 한다.
kotlin의 companion object는 말그대로 객체이며 이는static class로 컴파일된다.
그러나 java의 static 블록은 바로 바이트코드로 변환된다고 한다.
```java
//static 블록이 변환된 바이트코드 예시
static {};
    Code:
       0: ldc           #2    // String Inside Java static block
       2: invokestatic  #3    // Method java/lang/System.out.println:(Ljava/lang/String;)V
       5: return
```
