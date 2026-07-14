export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="w-full max-w-5xl mx-auto">{children}</section>;
}
