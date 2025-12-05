import { AboutSection } from './components/about-section';
import { MyProjects } from './components/my.proyects';
import { Technologies } from './components/technologies';
import { Contact } from './components/contact';

const sections = [
  { id: 'about', label: 'Sobre mí' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'technologies', label: 'Tecnologías' },
  { id: 'contact', label: 'Contacto' },
];

export function App() {
  const handleNavigate = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-10 sm:px-8">
        <header className="sticky top-4 z-10">
          <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-slate-900/80 p-6 backdrop-blur-xl shadow-glow md:flex-row md:items-center md:justify-between">
            <div>
              {/* <p className="text-xs uppercase tracking-[0.4em] text-slate-400">

              </p> */}
              <p className="font-display text-2xl font-semibold text-white">
                Agustin Barrionuevo
              </p>
              <p className="text-sm text-slate-400">
                Cs. de la Computación · Machine Learning · Desarrollo backend
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {sections.map((section) => (
                <button
                  key={section.id}
                  className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  onClick={() => handleNavigate(section.id)}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        </header>

        <main className="space-y-24 pt-20 md:pt-24">
          <AboutSection onNavigate={handleNavigate} />
          <MyProjects />
          <Technologies />
          <Contact />
        </main>
      </div>
    </div>
  );
}
