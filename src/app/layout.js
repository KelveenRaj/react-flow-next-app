import { Inter } from "next/font/google";
import Provider from "./provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "react-flow-next-app",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html className={inter.className} suppressHydrationWarning>
      <head />
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
