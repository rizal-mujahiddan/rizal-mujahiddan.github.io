import "../globals.css";
export default function SkillsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className="h-full antialiased">{children}</section>;
}
