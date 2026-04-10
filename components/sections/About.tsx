import { site } from "@/data/site";
import { Section } from "@/components/ui/Section";

export function About() {
  return (
    <Section id="about" title="About">
      <div className="flex flex-col gap-6 text-xl leading-relaxed tracking-wide text-slate-400">
        {site.about.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </Section>
  );
}
