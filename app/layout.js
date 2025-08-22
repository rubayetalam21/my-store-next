import ClientRootLayout from "./ClientRootLayout";

export const metadata = {
  title: "My Store",
  description: "Next.js Product App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* This will handle all client UI elements like navbar and footer */}
        <ClientRootLayout>{children}</ClientRootLayout>
      </body>
    </html>
  );
}
