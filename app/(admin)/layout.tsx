import CmsNavbar from "../components/CmsNavbar";
import "./globals.css";
import Provider from "../utils/Provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <CmsNavbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
