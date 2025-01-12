"use client";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import withClientOnly from "./WithClientOnly";

interface ProviderProps {
  readonly children: ReactNode;
}

function Provider({ children }: ProviderProps) {
  return <ThemeProvider attribute="class">{children} </ThemeProvider>;
}

export default withClientOnly(Provider);
