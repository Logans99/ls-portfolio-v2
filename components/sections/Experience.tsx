import { site } from "@/data/site";
import { Section } from "@/components/ui/Section";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      {/* Mobile: cards */}
      <div className="flex flex-col gap-6 lg:hidden">
        {site.experience.map((job) => (
          <article
            key={`${job.company}-${job.period}`}
            className="rounded-xl border border-slate-700/50 p-6 transition hover:border-slate-600 hover:bg-slate-800/30"
          >
            <p className="text-sm text-slate-500">{job.period}</p>
            <h3 className="mt-2 text-xl font-semibold text-slate-100">
              {job.title} · {job.company}
            </h3>
            <p className="mt-3 text-lg text-slate-400">{job.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {job.tech.map((tag) => (
                <li key={tag} className="rounded-full bg-indigo-400/10 px-3 py-1 text-sm text-indigo-400">
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      {/* Desktop: timeline */}
      <div className="hidden lg:block relative">
        <div className="absolute left-[200px] top-0 bottom-0 w-px bg-slate-700/50" />
        <div className="flex flex-col gap-10">
          {site.experience.map((job) => (
            <article
              key={`${job.company}-${job.period}`}
              className="relative grid grid-cols-[200px_1fr]"
            >
              <div className="pr-8 pt-1 text-right">
                <p className="text-xs text-slate-500 leading-6 tracking-wide">{job.period}</p>
                <div className="absolute left-[200px] top-[6px] w-2.5 h-2.5 rounded-full bg-indigo-400 border-2 border-[#101827] -translate-x-1/2" />
              </div>
              <div className="pl-8">
                <h3 className="text-xl font-semibold text-slate-100 leading-snug">{job.title}</h3>
                <p className="text-base text-slate-500 mt-1">{job.company}</p>
                <p className="mt-3 text-lg text-slate-400">{job.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {job.tech.map((tag) => (
                    <li key={tag} className="rounded-full bg-indigo-400/10 px-3 py-1 text-xs text-indigo-400 tracking-wide">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
