import { useState } from "react";
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
    aspectRatio: string; // Proporción independiente para las tarjetas del grid
    rotation: number;    // Ligera inclinación estilo postal
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
        imageUrl:registroBibliotecaFoto,
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

    return (
        <section className="bg-[#1E2827] text-[#f5ecc2] py-24 md:py-32 border-t border-[#3B5249]/40">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* SEPARADOR */}
                <span className="flex items-center mb-12">
                    <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#3B5249]"></span>
                    <span className="shrink-0 px-6 font-mono text-xs uppercase tracking-widest text-[#f5ecc2]">
                        EXPLORADOR DE PROYECTOS
                    </span>
                    <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#3B5249]"></span>
                </span>

                {/* ENCABEZADO CENTRADO */}
                <div className="mb-16 text-center">
                    <h2 className="text-4xl sm:text-6xl font-medium tracking-tighter uppercase text-[#f5ecc2]">
                        Selección de <span className="text-[#dd4027]">Proyectos</span>
                    </h2>
                </div>

                {/* ESTRUCTURA PRINCIPAL: GRID MASONRY DE TARJETAS (IZQ) + FICHA DETALLADA (DER) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                    {/* COLUMNA IZQUIERDA: MASONRY GRID */}
                    <div className="lg:col-span-6 columns-1 sm:columns-2 gap-4 space-y-4">
                        {PROJECTS.map((project) => {
                            const isSelected = selectedProject.id === project.id;
                            return (
                                <div
                                    key={project.id}
                                    style={{ transform: `rotate(${project.rotation}deg)` }}
                                    onClick={() => setSelectedProject(project)}
                                    className={`break-inside-avoid cursor-pointer rounded-2xl p-4 bg-[#2A3735] border-b-2 transition-all duration-300 hover:scale-[1.02] hover:z-10 group ${
                                        isSelected
                                            ? "border-[#dd4027] shadow-2xl ring-1 ring-[#dd4027]/50"
                                            : "border-[#3B5249] hover:border-[#f5ecc2]/60"
                                    }`}
                                >
                                    {/* CONTENEDOR DE IMAGEN CON SU PROPORCIÓN EN LA TARJETA */}
                                    <div className={`relative w-full ${project.aspectRatio} rounded-lg overflow-hidden my-2 border border-[#3B5249]/50`}>
                                        <img
                                            src={project.imageUrl}
                                            alt={project.title}
                                            className="w-full h-full object-cover contrast-125 transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>

                                    {/* PIE DE LA TARJETA */}
                                    <div className="flex justify-between items-end font-mono text-xs font-bold text-[#f5ecc2] mt-3">
                                        <span className="group-hover:text-[#dd4027] transition-colors">
                                            {project.title}
                                        </span>
                                        <span className="text-[10px] text-[#9DAFA9] uppercase font-normal">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* COLUMNA DERECHA: FICHA DETALLADA */}
                    <div className="lg:col-span-6 sticky top-28 bg-[#2A3735] border-b-2 border-[#3B5249] rounded-2xl p-6 sm:p-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedProject.id}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -12 }}
                                transition={{ duration: 0.25 }}
                                className="space-y-6"
                            >
                                {/* FICHA TÉCNICA */}
                                <div className="flex flex-wrap justify-between items-center gap-4 border-b border-[#3B5249]/60 pb-4">
                                    <span className="font-mono text-xs text-[#dd4027] font-bold uppercase">
                                        {selectedProject.category}
                                    </span>
                                    <span className="font-mono text-xs text-[#9DAFA9] uppercase">
                                        // {selectedProject.year}
                                    </span>
                                </div>

                                {/* VISTA PREVIA PRINCIPAL CORREGIDA */}
                                <div className="relative w-full h-72 sm:h-80 rounded-xl overflow-hidden border border-[#3B5249]/80 bg-[#1E2827] flex items-center justify-center p-2">
                                    <img
                                        src={selectedProject.imageUrl}
                                        alt={selectedProject.title}
                                        className="w-full h-full object-contain contrast-125 rounded-lg"
                                    />
                                </div>

                                {/* DESCRIPCIÓN */}
                                <div className="space-y-3">
                                    <h3 className="text-xl sm:text-3xl font-medium uppercase tracking-tight text-[#f5ecc2]">
                                        {selectedProject.title}
                                    </h3>
                                    <p className="font-mono text-sm text-[#f5ecc2]/90 leading-relaxed">
                                        {selectedProject.description}
                                    </p>
                                    <p className="font-mono text-xs text-[#9DAFA9] leading-relaxed pt-2 border-l-2 border-[#dd4027] pl-4">
                                        {selectedProject.longDescription}
                                    </p>
                                </div>

                                {/* TECNOLOGÍAS */}
                                <div>
                                    <span className="font-mono text-xs text-[#9DAFA9] block mb-3 uppercase tracking-wider font-semibold">
                                        STACK TECNOLÓGICO:
                                    </span>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tech.map((t, i) => (
                                            <span
                                                key={i}
                                                className="font-mono text-xs bg-[#1E2827] text-[#f5ecc2] border border-[#3B5249]/60 px-3 py-1.5 rounded-md"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* ENLACE A GITHUB */}
                                {selectedProject.link && (
                                    <div className="pt-4 border-t border-[#3B5249]/60 flex justify-end">
                                        <a
                                            href={selectedProject.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 font-mono text-xs uppercase bg-[#dd4027] text-[#f5ecc2] hover:bg-[#f5ecc2] hover:text-[#1E2827] px-5 py-2.5 rounded-xl transition-all cursor-pointer font-bold"
                                        >
                                            <span>Explorar Repositorio</span>

                                        </a>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>

            </div>
        </section>
    );
}