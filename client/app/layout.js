import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Popup from "@/components/popup/Popup";
import PopupContextProvider from "@/components/popup/PopupContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "THE ERP",
    template: "%s - THE ERP",
  },
  description: "THE ERP system for handling products, sales reps, and sales",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <PopupContextProvider>
        <body className={inter.className}>
          <dev>
            <Popup />
          </dev>
          <div className="flex box-content">
            <header className="min-w-40 lg:min-w-64 fixed">
              <Header />
            </header>
            <main className="p-7 ml-40 lg:ml-64 w-full">{children}</main>
          </div>
        </body>
      </PopupContextProvider>
    </html>
  );
}
