# Wonder TDD
테스트 주도 개발 ( TDD: Test Driven Development )  
설계 방법론 같은 것이 아닌, 예기지 못한 버그를 미리 바로 잡는 지뢰 탐지기 같은 역할을 수행하는 것으로 느껴진다..  
그래도 테스트 코드를 짜는 연습, 습관을 들이면 꽤나 프로젝트 기여에 있어 도움이 될 거 같다.

# 저장소 소개
말 그대로 TDD 방법론 ( 테스트 주도 개발 ) 에 대해 궁금하고, 직접 한번 경험해 보고 싶어 생성한 저장소입니다.

# TDD 준비물
|기술|내용|
|---|---|
|ESBuild|빌드|
|Jest|TDD 수행, 테스트 케이스 작성을 위한 테스팅 프레임워크|
```
// npm
npm i -d jest
// yarn
yarn add --dev jest
```

# Jest To Do ..
1. 단위 테스트 진행
2. 테스트 작성 후, 테스트 기반의 기능 개발 ( 개발 코드 )
3. 통합 테스트 진행 ( 전체적인 테스트 E2E )

# 빌드 모듈
<a href="https://esbuild.github.io/" target="_blank">ESBuild</a>

# 패키지 관리: yarn berry
```
yarn create react-app . --template typescript
rm -rf node_module
rm -rf yarn.lock
yarn set version berry
yarn install
```

*.tsx, *.ts 빨간 줄 발생 해결 방법
```
yarn dlx @yarnpkg/sdks vscode
```
