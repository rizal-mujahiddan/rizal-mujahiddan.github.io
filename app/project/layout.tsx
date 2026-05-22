import "../globals.css";
export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className="h-full antialiased">{children}</section>;
}
