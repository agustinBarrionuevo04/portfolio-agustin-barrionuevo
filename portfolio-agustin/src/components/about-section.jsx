export function AboutSection({ onNavigate }) {
    return (
        <section
            id="about"
            className="grid gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-white/5 p-10 shadow-glow lg:grid-cols-[1.2fr_0.8fr]"
        >
            <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.5em] text-slate-400">
                    Sobre mí
                </p>
                <h1 className="font-display text-4xl font-semibold text-white sm:text-5xl">
                    Estudiante de Ciencias de la Computación y Desarrollador backend
                </h1>
                <p className="text-lg text-slate-300">
                    Soy estudiante de Ciencias de la Computación, apasionado por el aprendizaje continuo
                    y el Machine Learning. En mi tiempo libre, desarrollo y optimizo proyectos personales
                    para perfeccionar mis habilidades y compartir conocimiento con la comunidad.
                </p>
                <p className="text-lg text-slate-300">
                    También sigo de cerca las tendencias del desarrollo web moderno para crear experiencias
                    digitales accesibles y atractivas.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                    <button
                        onClick={() => onNavigate?.('projects')}
                        className="rounded-full bg-accent/90 px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                        Explorar proyectos
                    </button>
                    <button
                        onClick={() => onNavigate?.('technologies')}
                        className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                        Ver tecnologías
                    </button>
                </div>
            </div>
            <div className="rounded-2xl border border-white/5 bg-slate-900/70 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                    Lo que hago
                </p>
                <p className="mt-3 text-2xl font-semibold text-white">
                    Construyo soluciones enfocadas en la calidad y la escalabilidad
                </p>
                <ul className="mt-6 space-y-4 text-slate-300">
                    <li className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-accent"></span>
                        Diseño APIs y servicios rápidos usando Python, FastAPI y bases de datos SQL/NoSQL.
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-accent"></span>
                        Exploro técnicas de Machine Learning para agregar valor a cada producto.
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-accent"></span>
                        Desarrollo interfaces limpias con React y Tailwind enfocadas en UX.
                    </li>
                </ul>
            </div>
        </section>
    );
}
