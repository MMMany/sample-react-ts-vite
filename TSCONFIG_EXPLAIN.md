# tsconfig 파일 설명

이 문서는 `template-react-ts-vite` 프로젝트에서 사용하는 `tsconfig` 파일들의 각 옵션을 설명합니다.
루트 `tsconfig.json` 파일은 `references`를 사용하여 애플리케이션 코드용(`tsconfig.app.json`)과 Node.js 환경 설정 파일용(`tsconfig.node.json`) 설정을 분리합니다.

---

## `tsconfig.app.json`

이 파일은 `src` 및 `tests` 디렉터리에 있는 주 애플리케이션 코드(React)에 대한 TypeScript 설정을 정의합니다.

| 옵션                           | 설명                                                                                                                  |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| `tsBuildInfoFile`              | 증분 컴파일 정보를 저장할 파일 경로를 지정하여 재컴파일 속도를 향상시킵니다.                                          |
| `target`                       | 컴파일된 JavaScript 코드가 따를 ECMAScript 버전을 지정합니다. (`ES2022`)                                              |
| `useDefineForClassFields`      | 클래스 필드를 ECMAScript 표준에 따라 정의하도록 강제합니다.                                                           |
| `lib`                          | 컴파일에 포함될 라이브러리 파일 목록입니다. `ES2022`, `DOM`, `DOM.Iterable`은 브라우저 환경에 필요한 타입 정의입니다. |
| `module`                       | 생성될 모듈 코드의 종류를 지정합니다. `ESNext`는 최신 ECMAScript 모듈 표준을 사용합니다.                              |
| `skipLibCheck`                 | 모든 선언 파일(`.d.ts`)의 타입 검사를 건너뜁니다.                                                                     |
| `baseUrl`                      | 모듈 해석의 기준이 되는 경로를 설정합니다. (`.`)                                                                      |
| `paths`                        | `baseUrl`을 기준으로 경로 별칭을 설정합니다. 예: `#src/*` -> `src/*`                                                  |
| `moduleResolution`             | 모듈 해석 방식을 지정합니다. `bundler`는 Vite, Webpack 같은 최신 번들러의 동작을 모방합니다.                          |
| `allowImportingTsExtensions`   | `.ts` 확장자를 가진 파일을 가져올 수 있도록 허용합니다.                                                               |
| `verbatimModuleSyntax`         | `import type`과 일반 `import`를 명확히 구분하여 사용하도록 강제합니다.                                                |
| `moduleDetection`              | 각 파일을 ES 모듈로 취급할지 여부를 결정합니다. `force`는 모든 파일을 모듈로 간주합니다.                              |
| `noEmit`                       | TypeScript 컴파일러가 JavaScript 파일을 생성하지 않도록 합니다. (번들링은 Vite가 담당)                                |
| `jsx`                          | JSX 코드 컴파일 방식을 지정합니다. `react-jsx`는 React 17+의 새로운 JSX 변환을 사용합니다.                            |
| `strict`                       | 모든 엄격한 타입 검사 옵션을 활성화합니다. (`--strictNullChecks`, `--strictFunctionTypes` 등)                         |
| `noUnusedLocals`               | 사용되지 않는 지역 변수가 있으면 에러를 발생시킵니다.                                                                 |
| `noUnusedParameters`           | 사용되지 않는 매개변수가 있으면 에러를 발생시킵니다.                                                                  |
| `erasableSyntaxOnly`           | `import type`으로 가져온 모듈이 값으로 사용될 때 에러를 발생시킵니다.                                                 |
| `noFallthroughCasesInSwitch`   | `switch` 문에서 `break`나 `return`이 없는 `case`가 있을 경우 에러를 발생시킵니다.                                     |
| `noUncheckedSideEffectImports` | 사용되지 않으면서 부수 효과(side effect)를 가질 수 있는 import 문에 대해 경고합니다.                                  |
| `types`                        | 전역으로 포함할 타입 정의 패키지를 지정합니다. Vitest와 Playwright 타입을 포함합니다.                                 |
| `esModuleInterop`              | CommonJS 모듈과 ES 모듈 간의 상호 운용성을 개선합니다.                                                                |
| `declaration`                  | 컴파일 시 각 TypeScript 파일에 해당하는 선언 파일(`.d.ts`)을 생성합니다.                                              |
| `include`                      | 컴파일에 포함할 파일 및 디렉터리 목록을 지정합니다. (`src`, `tests`)                                                  |

---

## `tsconfig.node.json`

이 파일은 `vite.config.ts`, `vitest.config.ts` 등 Node.js 환경에서 실행되는 프로젝트 설정 파일들에 대한 TypeScript 설정을 정의합니다.

| 옵션                           | 설명                                                                                     |
| ------------------------------ | ---------------------------------------------------------------------------------------- |
| `tsBuildInfoFile`              | 증분 컴파일 정보를 저장하여 재컴파일 속도를 향상시킵니다.                                |
| `target`                       | 컴파일될 JavaScript의 ECMAScript 버전을 지정합니다. (`ES2023`)                           |
| `lib`                          | 컴파일에 포함될 라이브러리 파일 목록입니다. `ES2023`은 Node.js 환경에 적합합니다.        |
| `module`                       | 생성될 모듈 코드의 종류를 지정합니다. `ESNext`는 최신 ECMAScript 모듈 표준을 사용합니다. |
| `skipLibCheck`                 | 모든 선언 파일(`.d.ts`)의 타입 검사를 건너뜁니다.                                        |
| `moduleResolution`             | 모듈 해석 방식을 지정합니다. `bundler`는 최신 번들러의 동작을 모방합니다.                |
| `allowImportingTsExtensions`   | `.ts` 확장자를 가진 파일을 가져올 수 있도록 허용합니다.                                  |
| `verbatimModuleSyntax`         | `import type`과 일반 `import`를 명확히 구분하여 사용하도록 강제합니다.                   |
| `moduleDetection`              | 각 파일을 ES 모듈로 취급할지 여부를 결정합니다. `force`는 모든 파일을 모듈로 간주합니다. |
| `noEmit`                       | TypeScript 컴파일러가 JavaScript 파일을 생성하지 않도록 합니다.                          |
| `strict`                       | 모든 엄격한 타입 검사 옵션을 활성화합니다.                                               |
| `noUnusedLocals`               | 사용되지 않는 지역 변수가 있으면 에러를 발생시킵니다.                                    |
| `noUnusedParameters`           | 사용되지 않는 매개변수가 있으면 에러를 발생시킵니다.                                     |
| `erasableSyntaxOnly`           | `import type`으로 가져온 모듈이 값으로 사용될 때 에러를 발생시킵니다.                    |
| `noFallthroughCasesInSwitch`   | `switch` 문에서 `break`나 `return`이 없는 `case`가 있을 경우 에러를 발생시킵니다.        |
| `noUncheckedSideEffectImports` | 사용되지 않으면서 부수 효과(side effect)를 가질 수 있는 import 문에 대해 경고합니다.     |
| `include`                      | 컴파일에 포함할 파일 목록을 지정합니다. (`*.config.js`, `*.config.ts`)                   |
