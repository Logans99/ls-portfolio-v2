export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="mb-6 text-base font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
        {title}
      </h2>
      {children}
    </section>
  );
}
