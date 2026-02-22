import cabanas from "../assets/cabanasLaGranja.png";
import deathCards from "../assets/deathOnTheCard.png";
import chatbot from "../assets/portada_wsp_chatbot.png";

export function MyProjects() {
    const projects = [
        {
            title: "Game Agatha Christie · Death of the Cards",
            description:
                "Juego narrativo de misterio donde el objetivo es resolver el caso antes de que el tiempo se agote. Frontend en React, backend con FastAPI y persistencia mediante SQLAlchemy.",
            link: "https://github.com/agustinBarrionuevo04/Game_Agatha-Criestie_Death_of_the_cards",
            image: deathCards
        },
        {
            title: "Cabañas La Granja - Landing Page",
            description:
                "Landing page construida con Next.js, React y TypeScript para mostrar servicios, disponibilidad y contacto de un complejo turístico. Tailwind CSS para el layout adaptable.",
            link: "https://lagranja-cabanas.vercel.app/",
            image: cabanas
        },
        {
            title: "WhatsApp Personal Chatbot",
            description:
                "Chatbot inteligente para WhatsApp que usa NLP con @nlpjs, registra gastos automáticamente en Google Sheets y se integra con WhatsApp Web, Node.js y pipelines de testing con Jest.",
            link: "https://github.com/agustinBarrionuevo04/personal-chatbot",
            image: chatbot
        },
        {
            title: "Face Identification",
            description:
                "Sistema de reconocimiento facial apoyado en Python, OpenCV y modelos de Machine Learning para validar identidades en imágenes o video en tiempo real.",
            link: "https://github.com/agustinBarrionuevo04/FaceId",
            image: "https://plurilock.com/wp-content/uploads/2024/02/dreamstime_m_137534981-1024x661.jpg"
        },
        {
            title: "Predictor Del Precio Del Dolar- ML",
            description:
                "Modelo de Machine Learning desarrollado en Python para predecir el precio del dólar utilizando datos históricos, técnicas de regresión y de arboles de decisión.",
            link: "https://github.com/agustinBarrionuevo04/blue-dollar-ml",
            image:"data:image/png;base64,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"
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
