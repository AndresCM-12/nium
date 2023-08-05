import "./globals.css";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Nium",
  description: "Administración inmobiliaria",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
