import Main from "./src/components/Main";
// import theme from "./src/theme";
import { NavigationContainer } from "@react-navigation/native";
import { MD3LightTheme as DefaultTheme, PaperProvider } from "react-native-paper";
import * as React from "react";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    secondary: "yellow",
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </PaperProvider>
  );
}
