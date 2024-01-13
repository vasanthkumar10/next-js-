export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <h1>Header</h1>
        <hr />
        {children}
        <hr />
        <h1>Footer</h1>
      </body>
    </html>
  );
}
