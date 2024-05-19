import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin", "latin-ext"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className + " bg-zinc-300 dark:bg-black"}>
        {children}
      </body>
    </html>
  );
}
