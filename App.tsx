import { ThemeProvider } from "styled-components";
import Theme from "./src/styles/themes/Theme";

import { Home } from "./src/screens/Home";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <ThemeProvider theme={Theme}>
        <Home />
      </ThemeProvider>
    </>
  );
}
