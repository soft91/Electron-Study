## 목차

* [프로젝트 구조](#프로젝트-구조)
* [설치 방법](#설치-방법)
* [사용 방법](#사용-방법)

### 프로젝트 구조

```
$ electron_builder
pind_electron/
├── assets/            # Electron에서 사용 할 Assets 파일들의 모임.(예: Logo 등...) 
├── jars/              # Electron에서 필요한 jar 파일을 넣으시면 됩니다.
├── main.js            # Electron에서 실질적으로 Build를 할 때 필요한 스크립트 
├── preload.js         # Electron에서 페이지를 호출하기 전 필요한 스크립트
└── renderer.js        
```

### 실행 및 설치 방법

1. Install NPM packages
```sh
npm install
```

2. Electron Start
```sh
npm start
```

3. Build Package
```sh
npm run build
```
### 사용 방법

Packaging은 electron-packager 서드파티 라이브러리를 사용하여 Node.js 모듈로 electron 프로젝트를 원하는 플랫폼 환경에 맞춰 빌드를 해줍니다.<br>
Windows는 exe, OS X는 app 그리고 ia32,  x64과 같이 아키텍쳐도 맞춰서 빌드할 수 있습니다.

참고 : <https://www.electronjs.org/docs/>
빌드 참고 : <https://github.com/maxogden/electron-packager>