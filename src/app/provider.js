"use client";

import { ThemeProvider } from "next-themes";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

export default function RootLayout({ children }) {
  localStorage.setItem("theme", "light"); // set default theme
  return (
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </ChakraProvider>
  );
}
