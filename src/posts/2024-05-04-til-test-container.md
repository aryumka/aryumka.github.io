---
title: "[TIL] Test Container"
categories: dev
tags: [TIL, TestContainer]
series: ''
cover: ''
image: 'https://velog.velcdn.com/images/aryumka/post/9fcbd346-bd6e-4097-bce9-b7c9468b5cfc/image.png'
comments: true
draft: false
hide: false
---

In-memory service나 mock 없이 통합 테스트 환경에서 Docker 이미지 기반으로 DB, 메시지 브로커, 검색엔진 등의 테스트 인프라를 간단하게 구성할 수 있다.

특히 클라우드 환경의 MSA에서 유용하다.
![](https://velog.velcdn.com/images/aryumka/post/9fcbd346-bd6e-4097-bce9-b7c9468b5cfc/image.png)

JUnit을 이용한 테스트에서는 아래와 같이 사용한다.
```kotlin
testImplementation "org.junit.jupiter:junit-jupiter:5.8.1"
testImplementation "org.testcontainers:testcontainers:1.19.7"
testImplementation "org.testcontainers:junit-jupiter:1.19.7"
```
의존성을 설정하고
```java
@Testcontainers
class TokenReplayIntegrationTest {

    @Container
    private static final RedpandaContainer REDPANDA_CONTAINER = new RedpandaContainer(
            "docker.redpanda.com/vectorized/redpanda:v22.2.1");
...
```
위 처럼 kafka 통합 테스트 환경을 RedPanda를 이용하여 구성할 수도 있고
```java
...
OracleContainer oracleContainer = new OracleContainer("gvenzl/oracle-xe:21-slim-faststart")
    .withDatabaseName("testDB")
    .withUsername("testUser")
    .withPassword("testPassword")
...
```
위 처럼 DB 통합 테스트 환경을 구성할 수도 있다.