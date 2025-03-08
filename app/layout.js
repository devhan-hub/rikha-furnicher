import Footer from '@/components/Footer';
import "./globals.css";
import Navbar from '../components/navbar/Navbar';
import Cart from '@/components/Cart';
import StoreProvider from '@/redux/storeProvider';

export default function RootLayout({
  children
}) {

  return (
    <html lang="en">
      <body
      >
        <StoreProvider>
          <Navbar />
          <Cart />
          <main>
            {children}
          </main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
