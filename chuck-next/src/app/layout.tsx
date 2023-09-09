import { setupStore } from "@/redux/store";
import "./globals.scss";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
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
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
