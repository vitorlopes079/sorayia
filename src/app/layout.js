import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Sorayia",
  icons: {
    icon: "sorayia-fav-icon",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <main className="mainContainer">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
