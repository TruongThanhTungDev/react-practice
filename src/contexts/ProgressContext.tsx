import { createContext, ReactNode } from "react";

interface ProgressContextProviderProps {
  children: ReactNode
}

const progressDefault = {
  lastTime: "30/6/2021",
  status: "In Progress",
};

interface ProgressContextDefault {
  lastTime: string, 
  status: string,
}

export const ProgressContext = createContext<ProgressContextDefault>(progressDefault);
const ProgressContextProvider = ({
  children,
}: ProgressContextProviderProps) => {
  return (
    <ProgressContext.Provider value={progressDefault}>
      {children}
    </ProgressContext.Provider>
  );
};


export default ProgressContextProvider