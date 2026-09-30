import { motion } from "framer-motion";

interface SkillCategory {
    title: string;
    skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
    {
        title: "Frontend & Diseño",
        skills: [
            "TypeScript",
            "JavaScript",
            "HTML5",
            "CSS3",
            "Desarrollo Front-End",
            "Diseño Front-End",
            "Diseño Gráfico",
            "Diseño UI/UX",
        ],
    },
    {
        title: "Backend & Bases de Datos",
        skills: [
            "Java",
            "Spring Boot",
            "C#",
            "JPA",
            "SQL",
            "MySQL",
            "MongoDB",
        ],
    },
    {
        title: "Desarrollo Móvil & Hardware",
        skills: [
            "Kotlin",
            "Desarrollo de Android",
            "Desarrollo de Aplicaciones Móviles",
            "Arduino",
        ],
    },
    {
        title: "DevOps, Cloud & Herramientas",
        skills: [
            "Docker",
            "Amazon Web Services (AWS)",
            "Git",
            "GitHub",
            "Linux",
            "Ubuntu",
        ],
    },
    {
        title: "Arquitectura & Metodologías",
        skills: [
            "Programación Orientada a Objetos (POO)",
            "Patrones de Diseño",
            "Arquitectura de Aplicación",
            "Análisis de Requisitos",
            "JUnit",
            "Pruebas de Software",
            "Scrum",
            "Metodologías Agile y Waterfall",
            "Desarrollo de Software",
        ],
    },
    {
        title: "Idiomas",
        skills: [
            "Español (Nativo)",
            "Inglés (Nivel Alto)",
        ],
    },
];

export function SkillsSection() {
    return (
        <section className="bg-[#f5ecc2] text-[#547076] font-sans selection:bg-[#dd4027] border-[#3B5249]/40">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* ENCABEZADO */}
                <div className="mb-12">
                    <span className="font-mono text-sm uppercase tracking-widest text-[#547076] block mb-2 font-semibold">
                    </span>
                    <h2 className="text-4xl sm:text-6xl font-medium tracking-tighter uppercase">
                        Aptitudes & <span className="text-[#dd4027]">Tecnologías</span>
                    </h2>
                </div>

                {/* CATEGORÍAS EN GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SKILL_CATEGORIES.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                            className="bg-[#2A3735] border-b-2 border-[#3B5249] hover:border-[#dd4027] p-6 rounded-2xl transition-colors group"
                        >
                            <h3 className="font-mono text-base uppercase font-bold text-[#dd4027] mb-5 flex justify-between items-center">
                                <span>{cat.title}</span>
                                <span className="text-xs text-[#547076] group-hover:text-[#f5ecc2]">
                                    /{cat.skills.length}
                                </span>
                            </h3>

                            <div className="flex flex-wrap gap-2.5">
                                {cat.skills.map((skill, sIdx) => (
                                    <span
                                        key={sIdx}
                                        className="font-mono text-xs sm:text-sm bg-[#1E2827] text-[#f5ecc2] border border-[#3B5249]/60 px-3 py-1.5 rounded-md leading-normal"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CENTROS DE FORMACIÓN */}
                <div className="mt-10 bg-[#f5ecc2]  p-5 rounded-xl flex flex-wrap justify-between items-center font-mono text-sm text-[#547076] gap-4">
                    <span className="font-semibold uppercase tracking-wider">FORMACIÓN PRINCIPAL:</span>
                    <div className="flex flex-wrap gap-6 text-[#2A3735] font-medium">
                        <span>• IES Lázaro Cárdenas (DAM)</span>
                        <span>• Artediez (Arte Gráfico)</span>
                    </div>
                </div>

            </div>
        </section>
    );
}