import { site } from "@/data/site";
import { Section } from "@/components/ui/Section";
import { FaLock } from "react-icons/fa";

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="flex flex-col gap-8">
        {site.projects.map((project) => (
          <article
            key={project.title}
            className="rounded-xl border border-slate-700/50 p-6 transition hover:border-slate-600 hover:bg-slate-800/30"
          >
            {/* Header */}
            <div className="flex flex-col gap-1">
              <h3 className="text-2xl font-semibold text-slate-100">{project.title}</h3>
              {project.subtitle && (
                <p className="text-base text-slate-400">{project.subtitle}</p>
              )}
              {project.role && (
                <p className="text-sm text-slate-500 uppercase tracking-widest mt-1">{project.role}</p>
              )}
            </div>

            {/* Overview */}
            {project.overview && (
              <p className="mt-4 text-base text-slate-400 leading-relaxed">{project.overview}</p>
            )}

            {/* Problem / Solution */}
            {(project.problem || project.solution) && (
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {project.problem && (
                  <div className="rounded-lg bg-slate-800/50 p-4">
                    <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">Problem</h4>
                    <p className="text-base text-slate-400 leading-relaxed">{project.problem}</p>
                  </div>
                )}
                {project.solution && (
                  <div className="rounded-lg bg-slate-800/50 p-4">
                    <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">Solution</h4>
                    <p className="text-base text-slate-400 leading-relaxed">{project.solution}</p>
                  </div>
                )}
              </div>
            )}

            {/* Key Contributions */}
            {project.contributions && project.contributions.length > 0 && (
              <div className="mt-6">
                <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">Key Contributions</h4>
                <ul className="flex flex-col gap-2">
                  {project.contributions.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-base text-slate-400">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Impact */}
            {project.impact && project.impact.length > 0 && (
              <div className="mt-6">
                <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">Impact</h4>
                <ul className="flex flex-col gap-2">
                  {project.impact.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-base text-slate-400">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            <ul className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tag) => (
                <li key={tag} className="rounded-full bg-indigo-400/10 px-3 py-1 text-sm text-indigo-400 tracking-wide">
                  {tag}
                </li>
              ))}
            </ul>

            {/* Confidential notice */}
            {project.confidential && (
              <p className="mt-4 flex items-center gap-2 text-sm text-slate-600">
                <FaLock size={11} />
                Source code and live demo are not publicly available due to confidentiality.
              </p>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
