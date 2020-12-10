# SpringBoot & React Example
SpringBoot & React를 사용할 때 참고하기 좋은 sample입니다.  

Gradle로 boot application을 빌드할 때 웹팩 빌드도 한 번에 할 수 있습니다.  
gradle에서 node-gradle 플러그인을 사용해 npmInstall, webpack Build를 하였고  
processResources Task를 통해 웹팩 빌드 결과물을 boot application에서도 바라볼 수 있게 설정했습니다.

아래 코드는 운영환경에서 node setup을 하기위한 작업으로 local 환경에서는 불필요합니다.  
(혹시 개선할 수 있다면 comment 바랍니다.)
```
ext.profile = (!project.hasProperty('profile') || !profile) ? 'local' : profile

if (profile != 'local') {
    node {
        version "10.22.0"
        distBaseUrl = 'https://nodejs.org/dist'
        download true
        workDir file("$projectDir/fe/nodejs")
        npmWorkDir file("$projectDir/fe/npm")
        nodeModulesDir file("$projectDir/fe/node_modules")
    }
}
```

## 기술 스펙
- Spring Boot  
- Gradle
- React
- Webpack
- typescript
