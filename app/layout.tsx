import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ashwin Kumar S | Computer Science & UI/UX",
  description: "Portfolio of Ashwin Kumar S, a Computer Science student and UI/UX designer in Chennai.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
