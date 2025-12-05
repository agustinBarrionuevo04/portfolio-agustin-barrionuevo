export function MyProjects() {
    const projects = [
        {
            title: "Game Agatha Christie · Death of the Cards",
            description:
                "Juego narrativo de misterio donde el objetivo es resolver el caso antes de que el tiempo se agote. Frontend en React, backend con FastAPI y persistencia mediante SQLAlchemy.",
            link: "https://github.com/agustinBarrionuevo04/Game_Agatha-Criestie_Death_of_the_cards",
            image: ""
        },
        {
            title: "Cabañas La Granja · Sitio institucional",
            description:
                "Landing page construida con Next.js, React y TypeScript para mostrar servicios, disponibilidad y contacto de un complejo turístico. Tailwind CSS para el layout adaptable.",
            link: "https://lagranja-cabanas.vercel.app/",
            image: ""
        },
        {
            title: "Face Identification Toolkit",
            description:
                "Sistema de reconocimiento facial apoyado en Python, OpenCV y modelos de Machine Learning para validar identidades en imágenes o video en tiempo real.",
            link: "https://github.com/agustinBarrionuevo04/FaceId",
            image: ""
        }
    ];

    return (
        <section id="projects" className="space-y-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                    <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Proyectos</p>
                    <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">Mis proyectos destacados</h2>
                </div>
                {/* <span className="text-sm text-slate-400">Stack preferido: React · FastAPI · SQLAlchemy</span> */}
            </div>
            <div className="grid gap-6 md:grid-cols-2">
                {projects.map((project) => (
                    <article
                        key={project.title}
                        className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-card/80 shadow-glow transition hover:-translate-y-1 hover:border-accent/60"
                    >
                        <div className="aspect-video overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                loading="lazy"
                            />
                        </div>
                        <div className="flex flex-1 flex-col gap-4 p-6">
                            <h3 className="font-display text-2xl text-white">{project.title}</h3>
                            <p className="text-slate-300">{project.description}</p>
                            <div className="mt-auto">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full border border-accent/60 px-4 py-2 text-sm font-semibold text-accent transition hover:bg-accent/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                                >
                                    Ver proyecto
                                    <span aria-hidden="true">↗</span>
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
