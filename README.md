# Frontend
---
## 다운 시 기본 설정

```
npm install
npm run dev
```

## 추가한 라이브러리(npm)
- bootstrap
- sass(scss)

## React + TypeScript + Vite

이 템플릿은 HMR 및 일부 ESLint 규칙을 사용하여 Vite에서 React가 작동하도록 하기 위한 최소한의 설정을 제공합니다.

이번 slph 프로젝트에서는 아래의 플러그인을 사용합니다.

- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) 는 [SWC](https://swc.rs/) 를 사용하여 빠른 리프레시가 가능하게 해줍니다.

## ESLint 구성 확장하기

프로덕션 애플리케이션을 개발하는 경우, 구성을 업데이트하여 타입에 맞는 린트 규칙을 활성화할 것을 권장합니다.

- 최상위 레벨의 `parserOptions` 요소를 아래와 같이 설정해주세요.

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- `tseslint.configs.recommended` 를 `tseslint.configs.recommendedTypeChecked` 또는 `tseslint.configs.strictTypeChecked` 로 바꿔주세요.
- `...tseslint.configs.stylisticTypeChecked` 를 더하셔도 됩니다. (옵션)
- [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) 을 설치하고 config 파일을 아래와 같이 업데이트해주세요.

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
