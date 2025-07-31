import { create } from "zustand";

type LocaleString = "en" | "ko";

const locales: Record<string, LocaleString> = {
  en: "en",
  ko: "ko",
};

type LocaleState = {
  currentLocale: LocaleString;
  toggleLocale: (locale: LocaleString) => void;
};

const useLocale = create<LocaleState>((set) => ({
  currentLocale: "en",
  toggleLocale: (locale: LocaleString) => {
    if (!locales[locale]) {
      set({ currentLocale: "en" });
    } else {
      set({ currentLocale: locale });
    }
  },
}));

export default useLocale;
