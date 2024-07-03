<div align="center">
  <br />
    이미지삽입
  <br />
</div>

## Service Link

> [How's the weather?](https://weather-app-rho-coral.vercel.app/)

<br>

## Information

이 프로젝트는 사용자가 입력한 도시명을 기반으로 실시간 날씨 정보를 조회하고 시각적으로 표시하는 웹 애플리케이션입니다. <br>
OpenWeatherMap API를 활용하여 날씨 데이터를 가져와 사용자에게 제공합니다.

<br>

## Tech Stack

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

  <br>

## <a name="features">Features</a>

**날씨 정보 검색**

- 사용자가 도시명을 입력하여 해당 위치의 날씨 정보를 실시간으로 조회합니다.
- OpenWeatherMap API를 이용하여 날씨 정보를 가져옵니다.
- 날씨 정보는 현재 온도, 체감 온도, 바람 속도 등을 포함합니다.

**날씨 정보 표시**

- 검색한 위치의 날씨 정보를 UI를 통해 시각적으로 표시합니다.
- 표시되는 정보에는 도시 이름, 국가 코드, 날씨 상태 아이콘, 날씨 설명, 온도 등이 포함됩니다.

**사용자 입력 처리**

- 사용자가 입력한 도시명을 기반으로 API 요청을 보내어 날씨 정보를 검색합니다.
- 엔터키를 누르면 검색이 실행됩니다.

**동적 UI 업데이트**

- 사용자의 입력에 따라 동적으로 UI가 업데이트되어 날씨 정보가 실시간으로 업데이트 됩니다.
- API 응답에 따라 UI에 표시되는 내용이 변경됩니다.

<br>

## <a name="quick-start">Usage</a>

**깃 클론**

```bash
git clone https://github.com/moeyg/weather-app
cd weather-app
```

**필요한 패키지 설치**

```bash
npm install
npm create vite@latest
```

**실행**

```bash
npm run dev
```

**브라우저 실행**

```bash
Local: http://localhost:5173/
```
