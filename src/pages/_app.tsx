import theme from "components/Styled/theme";
import { ThemeProvider } from "styled-components";
import { Provider as ReduxProvider } from "react-redux";
import store from "redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ReduxProvider>
  );
}

export default MyApp;
