import React from "react";
import { Main } from "../screens/main";
import { setupStore } from "../redux/store";
import { Provider } from "react-redux";
import ThemeProvider from "../hooks/theme";

const store = setupStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Main />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
