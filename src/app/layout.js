import localFont from "next/font/local";
import "./globals.css";
import Header from "./header/page";
import Footer from "./footer/page";

const commissioner = localFont({
  src: "../fonts/Commissioner-Regular.ttf",
  variable: "Commissioner",
  weight: "400",
});

export const metadata = {
  title: "Студия звукозаписи C.Records",
  description: "Студия звукозаписи в Твери",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${commissioner.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
