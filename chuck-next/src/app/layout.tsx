import "./globals.scss";
import { Inter } from "next/font/google";
import { ReduxProvider } from "@/components/global/provider";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          dangerouslySetInnerHTML={{
            __html: themeInitializerScript,
          }}
        ></script>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}

export const dynamic = "force-dynamic";

const themeInitializer = () => {
  const persistedThemePreference = window.localStorage.getItem("theme");

  if (persistedThemePreference) {
    document.body.dataset.theme =
      window.localStorage.getItem("theme") || "light";
    return;
  }

  const preference = window.matchMedia("(prefers-color-scheme: dark)");
  const hasMediaQueryPreference = typeof preference.matches === "boolean";

  if (hasMediaQueryPreference) {
    document.body.dataset.theme = preference.matches ? "dark" : "light";
    window.localStorage.setItem("theme", preference.matches ? "dark" : "light");
  }
};

const themeInitializerScript = `(${themeInitializer})();
`;
