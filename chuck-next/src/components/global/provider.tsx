"use client";

import React from "react";
import { setupStore } from "../../redux/store";
import { Provider } from "react-redux";
import ThemeProvider from "@/hooks/theme";

const store = setupStore();

export const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  );
};
