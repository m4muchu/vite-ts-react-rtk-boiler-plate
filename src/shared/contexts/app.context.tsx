import React, {
  useEffect,
  createContext,
  useReducer,
  useMemo,
  useCallback,
} from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

/* ***package imports above this***  */

/* ***components imports above this***  */

import useCookie from "@/shared/hooks/useCookie";
/* ***libs, utils, custom-hooks imports above this***  */

/* ***data(redux) imports above this***  */

/* ***configs imports above this***  */

import appContextActions from "@/shared/constants/app-context-actions.enum";
import languages from "@/shared/constants/languages.enum";
import { i18n_COOKIE_KEY } from "@/shared/constants/cookies.keys";
import { setUserSystemPreference } from "@/shared/api/system.api";
/* ***enums, consts imports above this***  */

/* ***types imports above this***  */

/* ***style and styled components imports above this***  */

interface IAppContextProps {
  children: React.ReactNode;
}

export const AppContext = createContext({});

const initialAppState = {
  locale: languages.GERMAN,
};

function appStateReducer(state, action) {
  switch (action.type) {
    case appContextActions.setLang:
      return {
        ...state,
        locale: action.locale,
      };

    default:
      return state;
  }
}
/* ***local declarations above this***  */

export default function AppContextProvider(props: IAppContextProps) {
  const { i18n } = useTranslation();
  const { pathname } = useLocation();
  const [localeCookie, setLocaleCookie] = useCookie(
    i18n_COOKIE_KEY,
    languages.GERMAN
  );
  const [appState, appStateActionDispatch] = useReducer(
    appStateReducer,
    initialAppState
  );

  const changeLocale = useCallback((loc) => {
    appStateActionDispatch({ type: appContextActions.setLang, locale: loc });
  }, []);

  useEffect(() => {
    changeLocale(localeCookie);
  }, []);

  useEffect(() => {
    i18n.changeLanguage(appState.locale).then((_t) => {
      // updates html lang attrib
      document.querySelector("html")?.setAttribute("lang", appState.locale);
      setLocaleCookie(appState.locale);
    });
  }, [appState.locale]);

  const changeLocaleToDE = useCallback(
    (e) => {
      e.stopPropagation();
      e.preventDefault();
      changeLocale(languages.GERMAN);
    },
    [changeLocale]
  );

  const changeLocaleToEN = useCallback(
    (e) => {
      e.stopPropagation();
      e.preventDefault();
      changeLocale(languages.ENGLISH);
    },
    [changeLocale]
  );

  const changeLocaleToDEWithPersist = useCallback(
    (e) => {
      e.stopPropagation();
      e.preventDefault();
      changeLocale(languages.GERMAN);
      setUserSystemPreference({ language: languages.GERMAN });
    },
    [changeLocale, setUserSystemPreference]
  );

  const changeLocaleToENWithPersist = useCallback(
    (e) => {
      e.stopPropagation();
      e.preventDefault();
      changeLocale(languages.ENGLISH);
      setUserSystemPreference({ language: languages.ENGLISH });
    },
    [changeLocale, setUserSystemPreference]
  );

  const changeLocalePersist = useCallback(
    (languageValue) => {
      changeLocale(languageValue);
      setUserSystemPreference({ language: languageValue }).then(() => {
        // to refetch the contents from backend according to the language change
        window?.location?.reload();
      });
    },
    [changeLocale, setUserSystemPreference]
  );

  const value = useMemo(() => {
    return {
      locale: appState.locale,
      changeLocaleToDE,
      changeLocaleToEN,
      changeLocaleToDEWithPersist,
      changeLocaleToENWithPersist,
      changeLocalePersist,
    };
  }, [
    appState.locale,
    appStateActionDispatch,
    changeLocale,
    changeLocalePersist,
    changeLocaleToDEWithPersist,
    changeLocaleToENWithPersist,
    changeLocaleToDE,
    changeLocaleToEN,
  ]);

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}
