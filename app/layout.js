import "./globals.css";
import { AppProvider } from "./context/AppContext";
import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ClientModals from "./components/ClientModals";

export const metadata = {
  title: "Bazaar AF | Modern Afghan E-Commerce & Care Package Delivery",
  description: "Send groceries, gifts, care packages, and mobile top-ups to family in Kabul, Mazar-i-Sharif, Herat, Jalalabad, and Panjshir with Bazaar AF. Free city delivery with photo proof on every doorstep.",
  keywords: "Bazaar AF, Afghanistan shopping, send groceries to Afghanistan, afghan diaspora app, kabul grocery delivery, mobile top up afghanistan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Vazirmatn:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <AppProvider>
          <div className="site-viewport">
            <AnnouncementBar />
            <Navbar />
            <main className="main-content-flow">
              {children}
            </main>
            <Footer />

            {/* Global Modals & Drawers (Lazy Loaded) */}
            <ClientModals />
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
