import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";

/* ***package imports above this***  */

import AppRoutesOrganism from "../app-routes";
/* ***components imports above this***  */

import i18n from "@/shared/libs/i18n";
import AppContextProvider from "@/shared/contexts/app.context";
/* ***libs, utils, custom-hooks imports above this***  */

import AppStore from "@/shared/configs/store.config";
/* ***data(redux) imports above this***  */

import configs from "@/shared/configs";
/* ***configs imports above this***  */

import toggleFlags from "@/shared/constants/toggle.flags";
/* ***enums, consts imports above this***  */

/* ***types imports above this***  */

/* ***style and styled components imports above this***  */

interface IAppShellProps {}

/* ***local declarations above this***  */

export default function AppShell(props: IAppShellProps) {
  // if (configs.SENTRY_TOGGLE === toggleFlags.ON) {
  //   Sentry.init({
  //     dsn: configs.SENTRY_DSN,

  //     // Set tracesSampleRate to 1.0 to capture 100%
  //     // of transactions for performance monitoring.
  //     // We recommend adjusting this value in production
  //     tracesSampleRate: configs.SENTRY_TRACES_SAMPLE_RATE,
  //     environment: configs.SENTRY_ENV,
  //   });
  // }

  // // Hotjar Tracking Code for https://app.peers-solutions.com
  // if (configs.HOTJAR_ID !== 0 && configs.HOTJAR_SNIPPET_VERSION !== 0) {
  //   import("react-hotjar")
  //     .then((Hotjar) => {
  //       Hotjar.default.hotjar.initialize(
  //         configs.HOTJAR_ID,
  //         configs.HOTJAR_SNIPPET_VERSION
  //       );
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }

  return (
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <StyleProvider>
          <ConfigProvider
            theme={{
              token: {
                fontFamily: "Averta, sans-serif",
                colorText: "#062841",
                colorTextBase: "#062841",
                colorPrimary: "#00a2ef",
                colorError: "#ff4d4f",
                colorWarning: "#faad14",
                colorInfo: "#2f54eb",
                colorSuccess: "#52c41a",
                colorTextLabel: "#062841E0",
                colorBgLayout: "#ffffff",
                colorLink: "#00a2ef",
                colorInfoBg: "#e6fbff",
                colorInfoBorder: "#7ae2ff",
              },
            }}
          >
            {/* <Sentry.ErrorBoundary fallback={ErrorFallback}> */}
            <AppContextProvider>
              <Provider store={AppStore}>
                <AppRoutesOrganism />
              </Provider>
            </AppContextProvider>
            {/* </Sentry.ErrorBoundary> */}
          </ConfigProvider>
        </StyleProvider>
      </I18nextProvider>
    </BrowserRouter>
  );
}

AppShell.defaultProps = {};
