import { Montserrat } from "next/font/google";
import "./globals.css";


import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Sorayia",
  icons: {
    icon: "images/sorayia-fav-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <main className="mainContainer">{children}</main>
      </body>
    </html>
  );
}
