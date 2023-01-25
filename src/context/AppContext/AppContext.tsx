import React, { FC, useContext, useState } from "react";
import { IAppContext } from "./type";

const AppContext = React.createContext<IAppContext | null>(null);

export const useApp = () => useContext(AppContext) as IAppContext;

interface Props {
  children: React.ReactNode;
}

export const AppProvider: FC<Props> = ({ children }) => {
  const [appState, setAppState] = useState<
    Pick<IAppContext, "showTodayTask" | "showNews">
  >({
    showTodayTask: true,
    showNews: true,
  });

  const toggleShowTodayTask = () => {
    setAppState((prev) => ({
      ...prev,
      showTodayTask: !prev.showTodayTask,
    }));
  };

  const toggleShowNews = () => {
    setAppState((prev) => ({
      ...prev,
      showNews: !prev.showNews,
    }));
  };

  return (
    <AppContext.Provider
      value={{ ...appState, toggleShowTodayTask, toggleShowNews }}
    >
      {children}
    </AppContext.Provider>
  );
};
