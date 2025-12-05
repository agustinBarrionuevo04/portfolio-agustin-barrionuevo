import { HiOutlineMail } from 'react-icons/hi';
import { SiLinkedin } from 'react-icons/si';

const contactMethods = [
    {
        label: 'Correo',
        value: 'brianbarrionuevo0@gmail.com',
        href: 'mailto:brianbarrionuevo0@gmail.com',
        icon: HiOutlineMail,
    },
    {
        label: 'LinkedIn',
        value: 'Agustin Barrionuevo',
        href: 'https://www.linkedin.com/in/brian-barrionuevo-190a73294/',
        icon: SiLinkedin,
        external: true,
    },
];

export function Contact() {
    return (
        <section id="contact" className="space-y-6">
            <div>
                <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Contacto</p>
                <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
                    ¡Hablemos!
                </h2>
            </div>
            <div className="text-slate-300 space-y-2">
                <p>Estoy abierto a nuevas oportunidades y colaboraciones.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
                {contactMethods.map((method) => {
                    const Icon = method.icon;
                    return (
                        <a
                            key={method.label}
                            href={method.href}
                            target={method.external ? '_blank' : undefined}
                            rel={method.external ? 'noopener noreferrer' : undefined}
                            className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-5 transition hover:border-accent/60 hover:bg-slate-900/90"
                        >
                            <span className="rounded-2xl bg-accent/10 p-3 text-accent">
                                <Icon className="text-2xl" aria-hidden="true" />
                            </span>
                            <div>
                                <p className="text-xs uppercase tracking-[0.4em] text-slate-400">{method.label}</p>
                                <p className="text-lg font-semibold text-white transition group-hover:text-accent">
                                    {method.value}
                                </p>
                            </div>
                        </a>
                    );
                })}
            </div>
        </section>
    );
}
