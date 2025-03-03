import React from 'react';

interface IAppContext {
  isLoading: boolean,
  toggleShowLoading: () => void
}

export const AppContext = React.createContext<IAppContext>({
  isLoading: false,
  toggleShowLoading() {},
});

export const AppProvider = ({ children }: React.PropsWithChildren) => {
  const [isLoading, setIsLoading] = React.useState(false);

  function toggleShowLoading() {
    setIsLoading(prevState => !prevState)
  }

  return (
    <AppContext.Provider 
      value ={{
        isLoading,
        toggleShowLoading
      }}
    >
      {children}
    </AppContext.Provider>
  )
};

export const useAppContext = () => React.useContext(AppContext)