import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import blockexFoto from "../assets/BlockexFoto.jpeg";
import javaSqlFoto from "../assets/JavaSql.jpg";
import portFoliArtFoto from "../assets/PortFoliArt.jpeg";
import registroBibliotecaFoto from "../assets/RegistroBibliotecaFX.png";
import portfolioFoto from "../assets/PortfolioWeb.png";

interface Project {
    id: string;
    title: string;
    category: string;
    year: string;
    tech: string[];
    description: string;
    longDescription: string;
    imageUrl: string;
    link?: string;
    aspectRatio: string;
    rotation: number;
}

const PROJECTS: Project[] = [
    {
        id: "01",
        title: "BLOCKEX",
        category: "Android Studio App",
        year: "2026",
        tech: ["Kotlin", "Jetpack Compose", "Room DB", "REST API"],
        description: "Aplicación móvil para gestión de activos digitales.",
        longDescription: "Desarrollada nativamente para Android. Enfocada en ofrecer una interfaz ágil, reactiva y limpia con persistencia de datos local y sincronización en tiempo real.",
        imageUrl: blockexFoto,
        link: "https://github.com/GuillermoHualde/BLOCKEX_1.0",
        aspectRatio: "aspect-[9/16]",
        rotation: -2,
    },
    {
        id: "02",
        title: "Inserción de Alumnos",
        category: "JAVA Backend",
        year: "2025",
        tech: ["Java", "SQL", "DAO Pattern", "Connection Pool"],
        description: "Gestor backend de datos académicos y conectividad SQL.",
        longDescription: "Implementación de patrones de arquitectura backend (DAO, Pool de conexiones JDBC) enfocada en la eficiencia en consultas y robustez en la persistencia de datos.",
        imageUrl: javaSqlFoto,
        link: "https://github.com/GuillermoHualde/PoolConexiones-Dao-etc",
        aspectRatio: "aspect-[4/3]",
        rotation: 2,
    },
    {
        id: "03",
        title: "PortFoliArt",
        category: "Android Studio App",
        year: "2025",
        tech: ["Kotlin", "UI/UX Design", "Material 3"],
        description: "Plataforma móvil para exhibición de obras y piezas de arte.",
        longDescription: "Proyecto enfocado en la experiencia de usuario táctil, navegación fluida y maquetación de galerías dinámicas para creativos y diseñadores.",
        imageUrl: portFoliArtFoto,
        link: "https://github.com/GuillermoHualde/PortFoliArt",
        aspectRatio: "aspect-[9/16]",
        rotation: -3,
    },
    {
        id: "04",
        title: "Registro Biblioteca",
        category: "Java & Hibernate",
        year: "2024",
        tech: ["Java", "JavaFX", "Hibernate", "MySQL"],
        description: "Sistema de administración bibliotecaria con ORM.",
        longDescription: "Aplicación de escritorio completa construida con JavaFX e integración de ORM Hibernate para la gestión automatizada de préstamos, usuarios y catálogo.",
        imageUrl: registroBibliotecaFoto,
        link: "https://github.com/GuillermoHualde/Biblioteca",
        aspectRatio: "aspect-[16/9]",
        rotation: 3,
    },
    {
        id: "05",
        title: "Página Web Portfolio",
        category: "TypeScript & React",
        year: "2026",
        tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
        description: "Web interactiva y responsive con diseño editorial.",
        longDescription: "Portafolio web con animación continua, combinación de estéticas editorial y técnica, componentes interactivos y arquitectura moderna.",
        imageUrl: portfolioFoto,
        link: "https://github.com/GuillermoHualde/Portfolio",
        aspectRatio: "aspect-[16/9]",
        rotation: -1,
    },
];

export function ProjectsSelector() {
    const [selectedProject, setSelectedProject] = useState<Project>(PROJECTS[0]);

    // Escuchar la selección desde el carrusel superior
    useEffect(() => {
        const handleProjectSelect = (e: Event) => {
            const customEvent = e as CustomEvent<{ projectId: string }>;
            const projectFound = PROJECTS.find((p) => p.id === customEvent.detail.projectId);
            if (projectFound) {
                setSelectedProject(projectFound);
            }
        };

        window.addEventListener("select-project", handleProjectSelect);
        return () => window.removeEventListener("select-project", handleProjectSelect);
    }, []);

    // Componente reutilizable con la información técnica detallada
    const ProjectDetailContent = ({ project }: { project: Project }) => (
        <div className="space-y-5">
            <div className="flex flex-wrap justify-between items-center gap-4 border-b border-[#3B5249]/60 pb-3">
                <span className="font-mono text-xs text-[#dd4027] font-bold uppercase">
                    {project.category}
                </span>
                <span className="font-mono text-xs text-[#9DAFA9] uppercase">
                    // {project.year}
                </span>
            </div>

            <div className="relative w-full h-60 sm:h-80 rounded-xl overflow-hidden border border-[#3B5249]/80 bg-[#1E2827] flex items-center justify-center p-2">
                <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-contain contrast-125 rounded-lg"
                />
            </div>

            <div className="space-y-2">
                <h3 className="text-xl sm:text-3xl font-medium uppercase tracking-tight text-[#f5ecc2]">
                    {project.title}
                </h3>
                <p className="font-mono text-xs sm:text-sm text-[#f5ecc2]/90 leading-relaxed">
                    {project.description}
                </p>
                <p className="font-mono text-[11px] sm:text-xs text-[#9DAFA9] leading-relaxed pt-2 border-l-2 border-[#dd4027] pl-3 sm:pl-4">
                    {project.longDescription}
                </p>
            </div>

            <div>
                <span className="font-mono text-[10px] sm:text-xs text-[#9DAFA9] block mb-2 uppercase tracking-wider font-semibold">
                    STACK TECNOLÓGICO:
                </span>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tech.map((t, i) => (
                        <span
                            key={i}
                            className="font-mono text-[10px] sm:text-xs bg-[#1E2827] text-[#f5ecc2] border border-[#3B5249]/60 px-2.5 py-1 rounded-md"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            {project.link && (
                <div className="pt-3 border-t border-[#3B5249]/60 flex justify-end">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-xs uppercase bg-[#dd4027] text-[#f5ecc2] hover:bg-[#f5ecc2] hover:text-[#1E2827] px-4 sm:px-5 py-2.5 rounded-xl transition-all cursor-pointer font-bold"
                    >
                        <span>Explorar Repositorio</span>
                        <span>↗</span>
                    </a>
                </div>
            )}
        </div>
    );

    return (
        <section id="explorador-proyectos" className="bg-[#1E2827] text-[#f5ecc2] py-16 sm:py-24 md:py-32 border-t border-[#3B5249]/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">

                {/* SEPARADOR */}
                <span className="flex items-center mb-8 sm:mb-12">
                    <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#3B5249]"></span>
                    <span className="shrink-0 px-3 sm:px-6 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#f5ecc2]">
                        EXPLORADOR DE PROYECTOS
                    </span>
                    <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#3B5249]"></span>
                </span>

                {/* ENCABEZADO */}
                <div className="mb-10 sm:mb-16 text-center">
                    <h2 className="text-3xl sm:text-6xl font-medium tracking-tighter uppercase text-[#f5ecc2]">
                        Selección de <span className="text-[#dd4027]">Proyectos</span>
                    </h2>
                </div>

                {/* ESTRUCTURA ADAPTADA */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">

                    {/* COLUMNA DE TARJETAS (En móvil se listan en 1 sola columna) */}
                    <div className="lg:col-span-6 space-y-4">
                        {PROJECTS.map((project) => {
                            const isSelected = selectedProject.id === project.id;
                            return (
                                <div key={project.id} className="w-full">
                                    {/* Tarjeta de Proyecto */}
                                    <div
                                        style={{ transform: `rotate(${project.rotation}deg)` }}
                                        onClick={() => setSelectedProject(project)}
                                        className={`cursor-pointer rounded-2xl p-3 sm:p-4 bg-[#2A3735] border-b-2 transition-all duration-300 hover:scale-[1.01] group ${
                                            isSelected
                                                ? "border-[#dd4027] shadow-2xl ring-1 ring-[#dd4027]/50"
                                                : "border-[#3B5249] hover:border-[#f5ecc2]/60"
                                        }`}
                                    >
                                        <div className={`relative w-full ${project.aspectRatio} max-h-72 rounded-lg overflow-hidden my-1 sm:my-2 border border-[#3B5249]/50`}>
                                            <img
                                                src={project.imageUrl}
                                                alt={project.title}
                                                className="w-full h-full object-cover contrast-125 transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>

                                        <div className="flex justify-between items-end font-mono text-xs font-bold text-[#f5ecc2] mt-2">
                                            <span className="group-hover:text-[#dd4027] transition-colors">
                                                {project.title}
                                            </span>
                                            <span className="text-[10px] text-[#9DAFA9] uppercase font-normal">
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* VISTA DESPLEGABLE EN MÓVIL (Aparece justo debajo de la tarjeta seleccionada) */}
                                    <AnimatePresence>
                                        {isSelected && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="lg:hidden mt-3 bg-[#2A3735] border-2 border-[#dd4027] rounded-2xl p-4 sm:p-6 shadow-xl overflow-hidden"
                                            >
                                                <ProjectDetailContent project={selectedProject} />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>

                    {/* COLUMNA DE FICHA DETALLADA (Exclusiva para ordenadores/pantallas grandes LG) */}
                    <div className="hidden lg:block lg:col-span-6 sticky top-28 bg-[#2A3735] border-b-2 border-[#3B5249] rounded-2xl p-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedProject.id}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -12 }}
                                transition={{ duration: 0.25 }}
                            >
                                <ProjectDetailContent project={selectedProject} />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>

            </div>
        </section>
    );
}