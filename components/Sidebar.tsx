import { site } from "@/data/site";

type Section = { id: string; label: string };

type Props = {
  sections: Section[];
  activeSection: string;
  setActiveSection: (id: string) => void;
};

export function Sidebar({ sections, activeSection, setActiveSection }: Props) {
  return (
    <aside className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[36%] lg:shrink-0 lg:flex-col lg:justify-between lg:py-24 py-16 lg:pr-8">
      <div className="flex flex-col gap-6">
        {/* Identity */}
        <div className="flex flex-col gap-2">
          <h1 className="text-7xl font-bold tracking-tight text-slate-100 leading-tight">
            {site.name}
          </h1>
          <h2 className="text-2xl font-medium text-slate-300">{site.role}</h2>
        </div>

        {/* Intro */}
        <p className="text-lg leading-8 text-slate-400 max-w-sm">{site.intro}</p>

        {/* Nav */}
        <nav className="hidden lg:block mt-6">
          <ul className="flex flex-col gap-5">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={() => setActiveSection(section.id)}
                  className={`group inline-flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.15em] transition-colors duration-200 ${
                    activeSection === section.id
                      ? "text-slate-100"
                      : "text-slate-500 hover:text-slate-300"
                  }`}
                >
                  <span
                    className={`h-px transition-all duration-300 ${
                      activeSection === section.id
                        ? "w-16 bg-slate-100"
                        : "w-8 bg-slate-600 group-hover:w-12 group-hover:bg-slate-400"
                    }`}
                  />
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Social links */}
      <ul className="flex gap-6 mt-10 lg:mt-0">
        {site.social.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              aria-label={item.label}
              className="text-slate-500 hover:text-slate-200 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              <item.icon size={32} />
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
