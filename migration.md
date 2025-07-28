### **MUI 전환 계획**

**1단계: 기존 UI 프레임워크 및 종속성 제거**

- `package.json`에서 `shadcn/ui`, `tailwindcss`와 관련 라이브러리(`lucide-react`, `class-variance-authority`, `clsx`, `tailwind-merge` 등)를 제거합니다.
- `postcss`, `autoprefixer` 등 Tailwind CSS 관련 종속성도 제거합니다.
- `tailwind.config.js`, `postcss.config.js`, `components.json` 설정 파일을 삭제합니다.
- 전역 CSS 파일 (`src/App.css` 또는 `src/styles/app.css`)에서 `@tailwind` 지시문을 삭제합니다.

**2단계: MUI 및 관련 종속성 설치**

- `@mui/material`과 핵심 종속성인 `@emotion/react`, `@emotion/styled`를 설치합니다.
- 아이콘 사용을 위해 `@mui/icons-material`을 설치합니다.
- MUI의 기본 글꼴인 Roboto 글꼴을 추가합니다.

**3단계: MUI 설정 및 테마 구성**

- `index.html`에 Roboto 글꼴 링크를 추가합니다.
- `src/theme.ts` (또는 `src/styles/theme.ts`) 파일을 생성하여 MUI 테마를 정의합니다.
  - `@mui/material/styles`에서 `createTheme` 함수를 가져옵니다.
  - `createTheme`을 사용하여 기본 테마를 확장하는 커스텀 테마 객체를 생성합니다. 이 객체는 향후 색상, 타이포그래피 등을 수정하기 위한 기반(boilerplate)이 됩니다.
- 애플리케이션의 진입점(`src/main.tsx`)을 수정합니다.
  - `CssBaseline` 컴포넌트를 추가하여 브라우저 간 스타일을 일관되게 유지합니다.
  - `ThemeProvider`로 전체 애플리케이션을 감싸고, 위에서 생성한 커스텀 테마를 `theme` prop으로 전달합니다.

**4단계: 컴포넌트 마이그레이션**

- 기존 `shadcn/ui` 컴포넌트 파일(`src/components/ui/`)을 삭제합니다.
- `shadcn/ui` 컴포넌트와 Tailwind CSS 클래스를 사용하던 모든 파일(`App.tsx`, `Example.tsx` 등)을 찾습니다.
- 해당 파일들에서 `import` 구문을 MUI 컴포넌트(`@mui/material`)를 가져오도록 수정합니다.
- 기존 컴포넌트 태그와 `className` 속성을 해당하는 MUI 컴포넌트와 `sx` prop 또는 `styled` API로 교체합니다.

**5단계: 검증**

- 개발 서버(`npm run dev`)를 실행하여 애플리케이션이 오류 없이 렌더링되는지 확인합니다.
- 테스트(`npm test`)를 실행하여 기존 기능이 정상적으로 동작하는지 확인합니다. (UI 구조 변경으로 인해 스냅샷 테스트 등 일부 테스트는 실패할 수 있으며, 이 경우 업데이트가 필요합니다.)
- 린터(`npm run lint`)를 실행하여 코드 스타일을 검사합니다.
