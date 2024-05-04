---
title: "[TIL] 리소스 위치 참조 시 / 쓰지 않기"
categories: dev
tags: [TIL, Spring]
series: ''
cover: ''
image: '/images/og.png'
comments: true
draft: false
hide: false
---

어플리케이션 설정파일 등의 리소스 위치를 참조할 때 "../aaa.xml"와 같은 상대경로는 사용하지 않는 것이 좋음. classpath는 현재 디렉토리에서 가장 가까운 곳부터 탐색하는데 만약 classpath 정보가 변경된다면 의도와 전혀 다른 경로가 참조될 수 있음.
마찬가지로 "classpath: aaa/bbb.xml" 또는 절대경로를 이용한 경로는 사용하지 않는 것이 좋다. 특정 경로와 어플리케이션의 설정을 커플링 시키게 되므로.
가능하면 "/"를 아예 사용하지 않는 것이 좋고 필요하다면 JVM 환경변수를 이용하여 "$\{...}"와 같이 사용할 수 있다.
