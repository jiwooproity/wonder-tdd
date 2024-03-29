# Wonder TDD
테스트 주도 개발 ( TDD: Test Driven Development )

# 저장소 소개
말 그대로 TDD 방법론 ( 테스트 주도 개발 ) 에 대해 궁금하고, 직접 한번 경험해 보고 싶어 생성한 저장소입니다.  
혼자서 이렇게 공부하는 것도 즐거워서 다행이네요.

# TDD 준비물
|기술|내용|
|---|---|
|Webpack|React 라이브러리 환경 구성을 위해 사용할 예정|
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
rm -rf node_modul
rm -rf yarn.lock
yarn set version berry
yarn install
```

*.tsx, *.ts 빨간 줄 발생 해결 방법
```
yarn dlx @yarnpkg/sdks vscode
```
