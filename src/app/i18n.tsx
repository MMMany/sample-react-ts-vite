import { type JSX } from "react";
import { use, type Resource } from "i18next";
import { initReactI18next } from "react-i18next";

const modules = import.meta.glob<{ default: Record<string, string> }>("#/shared/assets/locale/*.json", { eager: true });
const resources: Resource = {};
for (const path in modules) {
  const lang = path.match(/locale\/(.*)\.json$/)?.[1];
  if (lang) {
    resources[lang] = { translation: modules[path].default };
  }
}

type I18nInitProps = {
  children?: JSX.Element;
};

function I18nInit({ children }: I18nInitProps) {
  use(initReactI18next)
    .init({ resources })
    .catch((err) => {
      console.error("Error initializing i18next:", err);
    });

  return children;
}

export default I18nInit;
