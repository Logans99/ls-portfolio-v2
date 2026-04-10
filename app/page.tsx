"use client";

import { useActiveSection } from "@/hooks/useActiveSection";
import { Sidebar } from "@/components/Sidebar";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

const sectionIds = sections.map((s) => s.id);

export default function HomePage() {
  const [activeSection, setActiveSection] = useActiveSection(sectionIds);

  return (
    <main className="min-h-screen bg-[#101827] text-slate-200">
      <div className="mx-auto max-w-[1700px] px-6 sm:px-12 lg:px-20">
        <div className="lg:flex lg:gap-20">
          <Sidebar
            sections={sections}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
          <div className="lg:py-24 py-16 flex flex-col gap-28 min-w-0 lg:pl-8">
            <About />
            <Experience />
            <Projects />
          </div>
        </div>
      </div>
    </main>
  );
}
