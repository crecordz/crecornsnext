import localFont from "next/font/local";
import Script from "next/script";
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
  description: "Студия звукозаписи в Твери. Профессиональная запись, аранжировки, сведение, мастеринг",

  openGraph: {
    type: "website",
    url: "https://crecords.ru",
    title: "Студия звукозаписи C.Records, г.Тверь",
    description:
      "Студия звукозаписи в Твери. Профессиональная запись, аранжировки, сведение, мастеринг",
    images: ["https://crecords.ru/1.jpg"],
    siteName: "C.Records",
  },

  verification: {
    yandex: "4b36336186155389",
    google: "1Y8ymDmQ2imucH5fI7Ig9Mf52LXUleHTVfkxBgEywrA",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${commissioner.variable}`}>
        <Header />
        <main className="site-main">{children}</main>

        {/* Yandex.Metrika counter */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function (m, e, t, r, i, k, a) {
              m[i] =
                m[i] ||
                function () {
                  (m[i].a = m[i].a || []).push(arguments);
                };
              m[i].l = 1 * new Date();
              for (var j = 0; j < document.scripts.length; j++) {
                if (document.scripts[j].src === r) {
                  return;
                }
              }
              (k = e.createElement(t)),
                (a = e.getElementsByTagName(t)[0]),
                (k.async = 1),
                (k.src = r),
                a.parentNode.insertBefore(k, a);
            })(
              window,
              document,
              "script",
              "https://mc.yandex.ru/metrika/tag.js",
              "ym"
            );

            ym(99789764, "init", {
              clickmap: true,
              trackLinks: true,
              accurateTrackBounce: true,
              webvisor: true,
            });
          `}
        </Script>

        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/99789764"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>

        <Footer />
      </body>
    </html>
  );
}
