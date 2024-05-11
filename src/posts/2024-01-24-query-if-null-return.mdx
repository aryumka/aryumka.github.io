---
title: "[TIL] 쿼리로 피벗 시 if 함수에서 의도된 Null 리턴"
categories: dev
tags: [TIL, MySQL]
series: ''
cover: ''
image: '/images/og.png'
comments: true
draft: false
hide: false
---

`MySQL`에서 음수가 될 수 있는 칼럼를 쿼리로 피벗할 때 의도된 NULL을 사용한다. [오라클의 경우 11g 이상부터 내장된 PIVOT() 함수를 제공한다.](https://www.oracle.com/technical-resources/articles/database/sql-11g-pivot.html)
예를 들어 아래와 같은 테이블 A에서 조회한다고 하자.
![](https://velog.velcdn.com/images/aryumka/post/cde0baa0-dccc-410e-9111-72094800f25b/image.png)

위의 형태를 아래와 같이 피벗하는 경우
![](https://velog.velcdn.com/images/aryumka/post/12217603-9856-445a-95ac-565b54c277e9/image.png)

개인적으로 데이터를 피벗할 칼럼만큼의 ROW수 만큼 나오도록 IF()를 사용하여 펼친 후 다시 `MAX` 또는 `SUM` 등의 집계함수를 통해 `GROUP BY`로 압축하는 방법을 즐겨 쓴다. 
쿼리는 아래와 같다.
```sql
SELECT 
   펀드코드,
   MAX(IF(기간구분코드 = '01', 수익률, 0)) AS 기간1별수익률,
   ...
   MAX(IF(기간구분코드 = '06', 수익률, 0)) AS 기간N별수익률,
FROM A
GROUP BY 펀드코드;
```
그러나 위와 같이 IF()함수의 ELSE인자로 0을 넣었을 때 음수를 고려하지 않은 부정확한 값이 나온다. 음수값일 경우 0보다 작으므로 MAX조건으로 걸리지 않기 때문이다.
![](https://velog.velcdn.com/images/aryumka/post/530e0979-f392-419b-8d0f-5ad0739f0f73/image.png)
따라서 아래처럼 의도적으로 NULL을 넣어주면
```sql
SELECT 
   펀드코드,
   MAX(IF(기간구분코드 = '01', 수익률, NULL)) AS 기간1별수익률,
   ...
   MAX(IF(기간구분코드 = '06', 수익률, NULL)) AS 기간N별수익률,
FROM A
GROUP BY 펀드코드;
```
![](https://velog.velcdn.com/images/aryumka/post/35bdb3fa-06e2-4642-ba74-2cc6a4ca1ea2/image.png)

**음수가 null보다 상위로 정렬**되어 원하는 값을 얻을 수 있다.

NULL을 리턴하는 것은 대개 바람직하지 않은 practice라고 느껴진다. 그래서 default로 0을 자연스럽게 넣게 된다.
때문에 더욱 무의식적으로 실수하기 쉬운 부분이니 기록해두고 잊지 말아야겠다.