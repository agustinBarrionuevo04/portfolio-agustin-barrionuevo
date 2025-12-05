import {
    SiPython,
    SiFastapi,
    SiOpenjdk,
    SiCplusplus,
    SiMysql,
    SiMongodb,
    SiSqlalchemy,
    SiJavascript,
    SiReact,
    SiNodedotjs,
    SiGithub
} from 'react-icons/si';

export function Technologies() {
    const skills = [
        { name: 'Python', icon: SiPython, focus: 'Scripting y ML' },
        { name: 'FastAPI', icon: SiFastapi, focus: 'APIs performantes' },
        { name: 'Java', icon: SiOpenjdk, focus: 'Bases sólidas de OOP' },
        { name: 'C/C++', icon: SiCplusplus, focus: 'Aplicaciones de alto rendimiento' },
        { name: 'MySQL', icon: SiMysql, focus: 'Modelado relacional' },
        { name: 'MongoDB', icon: SiMongodb, focus: 'Esquemas flexibles' },
        { name: 'SQLAlchemy', icon: SiSqlalchemy, focus: 'ORM robusto' },
        { name: 'JavaScript', icon: SiJavascript, focus: 'Frontend interactivo' },
        { name: 'React', icon: SiReact, focus: 'SPA y componentes' },
        { name: 'Node.js', icon: SiNodedotjs, focus: 'Herramientas y servicios' },
        { name: 'GitHub', icon: SiGithub, focus: 'Colaboración y control de versiones' },
    ];

    return (
        <section id="technologies" className="space-y-6">
            <div>
                <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Stack</p>
                <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
                    Tecnologías & habilidades
                </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                        <div
                            key={skill.name}
                            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-5 transition hover:border-accent/60 hover:bg-slate-900/90"
                        >
                            <div className="rounded-2xl bg-accent/10 p-3 text-accent">
                                <Icon className="text-2xl" aria-hidden="true" />
                            </div>
                            <div>
                                <p className="text-lg font-semibold text-white">{skill.name}</p>
                                <p className="text-sm text-slate-400">{skill.focus}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
