'use client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./theme-provider";

type ContexProviderProps = {
  children: React.ReactNode;
}

const ContextProvider = ({ children }: ContexProviderProps) => {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <QueryClientProvider client={new QueryClient()}>
          {children}
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default ContextProvider;