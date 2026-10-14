import { motion } from "framer-motion";
import blockexFoto from "../assets/BlockexFoto.jpeg";
import javaSqlFoto from "../assets/JavaSql.jpg";
import portFoliArtFoto from "../assets/PortFoliArt.jpeg";
import registroBibliotecaFoto from "../assets/RegistroBibliotecaFX.png";
import portfolioFoto from "../assets/PortfolioWeb.png";

interface ProjectCard {
    id: string;
    title: string;
    category: string;
    imageUrl: string;
    link: string;
    aspectRatio: string;
    rotation: number;
}

const PROJECTS: ProjectCard[] = [
    {
        id: "01",
        title: "BLOCKEX",
        category: "AndroidStudio App",
        imageUrl: blockexFoto,
        link: "https://github.com/GuillermoHualde/BLOCKEX_1.0",
        aspectRatio: "aspect-[9/16]",
        rotation: -2,
    },
    {
        id: "02",
        title: "Inserción de Alumnos",
        category: "JAVA",
        imageUrl: javaSqlFoto,
        link: "https://github.com/GuillermoHualde/PoolConexiones-Dao-etc",
        aspectRatio: "aspect-[4/3]",
        rotation: 2,
    },
    {
        id: "03",
        title: "PortFoliArt",
        category: "AndroidStudio App",
        imageUrl: portFoliArtFoto,
        link: "https://github.com/GuillermoHualde/PortFoliArt",
        aspectRatio: "aspect-[9/16]",
        rotation: -3,
    },
    {
        id: "04",
        title: "Biblioteca",
        category: "Java, JavaFX y Hibernate",
        imageUrl: registroBibliotecaFoto,
        link: "https://github.com/GuillermoHualde/Biblioteca",
        aspectRatio: "aspect-[16/9]",
        rotation: 3,
    },
    {
        id: "05",
        title: "Pagina web Portfolio",
        category: "TypeScript, React",
        imageUrl: portfolioFoto,
        link: "https://github.com/GuillermoHualde/Portfolio",
        aspectRatio: "aspect-[16/9]",
        rotation: -1,
    },
];

const DOUBLE_PROJECTS = [...PROJECTS, ...PROJECTS];

export function ProjectCarouselSection() {

    const handleCardClick = (link: string, projectId: string) => {
        // 1. Sincroniza el proyecto seleccionado en el componente ProjectsSelector
        const event = new CustomEvent("select-project", { detail: { projectId } });
        window.dispatchEvent(event);

        // 2. Abre el enlace de GitHub en una nueva pestaña
        window.open(link, "_blank", "noopener,noreferrer");
    };

    return (
        <section className="bg-[#1E2827] text-[#f5ecc2] py-16 sm:py-24 md:py-32 border-t border-[#3B5249]/40 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-8 sm:mb-12">
                <span className="flex items-center mb-8 sm:mb-12">
                    <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#3B5249]"></span>
                    <span className="shrink-0 px-3 sm:px-6 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#f5ecc2]">
                        PROYECTOS PERSONALES
                    </span>
                    <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#3B5249]"></span>
                </span>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-end">
                    <h2 className="md:col-span-8 text-3xl sm:text-5xl md:text-6xl font-medium tracking-tighter leading-none uppercase text-[#f5ecc2]">
                        Código & Diseño
                    </h2>
                    <p className="md:col-span-4 font-mono text-xs sm:text-sm text-[#f5ecc2]/90 leading-relaxed">
                        Haz clic en cualquier tarjeta para abrir el repositorio de GitHub.
                    </p>
                </div>
            </div>

            <div className="w-full overflow-hidden py-6 sm:py-10 flex">
                <motion.div
                    className="flex gap-4 sm:gap-8 md:gap-12 items-center w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        ease: "linear",
                        duration: 30,
                        repeat: Infinity,
                    }}
                >
                    {DOUBLE_PROJECTS.map((item, index) => (
                        <div
                            key={`${item.id}-${index}`}
                            onClick={() => handleCardClick(item.link, item.id)}
                            style={{ transform: `rotate(${item.rotation}deg)` }}
                            className="group relative flex-none cursor-pointer hover:z-20 transition-transform duration-300 active:scale-95 hover:scale-105"
                        >
                            <div className={`w-52 sm:w-72 md:w-80 lg:w-96 ${item.aspectRatio} bg-[#2A3735] border-b-2 border-[#3B5249] rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl overflow-hidden flex flex-col justify-between group-hover:border-[#dd4027] transition-colors`}>
                                <div className="relative w-full h-full rounded-lg overflow-hidden my-1 sm:my-2 border border-[#3B5249]/50">
                                    <img
                                        src={item.imageUrl}
                                        alt={item.title}
                                        className="w-full h-full object-cover contrast-125 transition-all duration-500"
                                    />
                                </div>

                                <div className="flex justify-between items-end font-mono text-[10px] sm:text-xs font-bold text-[#f5ecc2] mt-1 sm:mt-2 group-hover:text-[#dd4027] transition-colors">
                                    <div className="flex items-center gap-1 truncate pr-2">
                                        <span className="truncate">{item.title}</span>
                                        <span className="shrink-0">↗</span>
                                    </div>
                                    <span className="shrink-0 text-[8px] sm:text-[10px] text-[#9DAFA9] uppercase font-normal tracking-wider">
                                        {item.category}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}