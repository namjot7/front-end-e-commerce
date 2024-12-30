import { CartContextProvider } from "./components/CartContext";

export const metadata = {
  title: "Online store",
  description: "Generated by create next app",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Afacad+Flux:wght@100..1000&display=swap" rel="stylesheet" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </head>
      <body>
        <CartContextProvider>
          {children}
        </CartContextProvider>
      </body>
    </html>
  );
}
