# Vite and [Capacitor](https://capacitorjs.com/)

## 안드로이드 환경설정

> 참고
> - https://capacitorjs.com/docs/getting-started/environment-setup
> - https://capacitorjs.com/docs/android

1. [안드로이드 스튜디오 설치](https://developer.android.com/studio?hl=ko)

2. [안드로이드 스튜디오 가상 기기 추가](https://developer.android.com/studio/run/managing-avds?_gl=1*1j6kd0v*_up*MQ..*_ga*OTA3NjE4MTE1LjE3MTQzNzY5OTA.*_ga_6HH9YJMN9M*MTcxNDM3Njk5MC4xLjAuMTcxNDM3Njk5MC4wLjAuMA..&hl=ko)

2. 안드로이드 플랫폼 추가
```
pnpm install @capacitor/android
```

3. 프로젝트 빌드

```
pnpm run build
```

3. 안드로이드 프로젝트 생성 & 열기

```
npx cap add android
npx cap open android
```

4. 안드로이드 스튜디오에서 "▶️" 버튼 클릭해서 실행

5. 만약 코드 수정 후 안드로이드 스튜디오에서 확인하고 싶다면 다시 빌드 후 프로젝트 생성 & 열기

```
pnpm run build

npx cap add android
npx cap open android
```

### trouble shooting
만약 "▶️" 버튼이 노출되지 않는다면 `Add Configuration...` 클릭 > `Edit Configurations...` > `Add new run configuration...` > `Android App` > Module `android.app.main` > `OK`