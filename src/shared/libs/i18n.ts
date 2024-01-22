import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "@/shared/locales/messages.en";
import de from "@/shared/locales/messages.de";
import languages from "../constants/languages.enum";

i18n
  .use(initReactI18next)
  // init i18next
  .init({
    // translation is the default namespace
    resources: {
      [languages.ENGLISH]: {
        translation: en,
      },
      [languages.GERMAN]: {
        translation: de,
      },
    },
    // fallbackLng: languages.GERMAN,
    // debug: configs.I18N_DEVTOOL_TOGGLE === toggleFlags.ON,
    debug: false,
    supportedLngs: [languages.GERMAN, languages.ENGLISH],
    nonExplicitSupportedLngs: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    contextSeparator: "~",
    pluralSeparator: "@",
    saveMissingPlurals: false,
    react: {
      useSuspense: false,
    },
  });

export default i18n;
