export function BaseSection({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen" id={id}>
      {children}
    </main>
  );
}
