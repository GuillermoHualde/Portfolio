import { motion } from "framer-motion";
import blockexFoto from "../assets/BlockexFoto.jpeg";
import javaSqlFoto from "../assets/JavaSql.jpg";
import portFoliArtFoto from "../assets/PortFoliArt.jpeg";
import registroBibliotecaFoto from "../assets/RegistroBiblioteca.png";
import portfolioFoto from "../assets/Portfolio.png";

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
        aspectRatio: "aspect-[9/17]", // Aspect ratio vertical natural
        rotation: -4,
    },
    {
        id: "02",
        title: "Aplicación insercción de Alumnos",
        category: "JAVA",
        imageUrl: javaSqlFoto,
        link: "https://github.com/GuillermoHualde/PoolConexiones-Dao-etc",
        aspectRatio: "aspect-[4/3]",
        rotation: 3,
    },
    {
        id: "03",
        title: "PortFoliArt",
        category: "AndoidStudio App",
        imageUrl: portFoliArtFoto,
        link: "https://github.com/GuillermoHualde/PortFoliArt",
        aspectRatio: "aspect-[9-17]",
        rotation: -6,
    },
    {
        id: "04",
        title: "Biblioteca",
        category: "Java, JavaFX y Hibernate",
        imageUrl: registroBibliotecaFoto,
        link: "https://github.com/GuillermoHualde/Biblioteca",
        aspectRatio: "aspect-[16/9]",
        rotation: 5,
    },
    {
        id: "05",
        title: "Pagina web Portfolio",
        category: "TypeScript, React",
        imageUrl: portfolioFoto,
        link: "https://github.com/GuillermoHualde/Portfolio",
        aspectRatio: "aspect-[16/9]",
        rotation: 5,
    },
];

const DOUBLE_PROJECTS = [...PROJECTS, ...PROJECTS];

export function ProjectCarouselSection() {
    return (
        <section className="bg-[#1E2827] text-[#f5ecc2] py-24 md:py-32 border-t border-[#3B5249]/40 overflow-hidden">

            {/* SEPARADOR*/}
            <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
                <span className="flex items-center mb-12">
                    <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#3B5249]"></span>
                    <span className="shrink-0 px-6 font-mono text-xs uppercase tracking-widest text-[#f5ecc2]">
                        PROYECTOS PERSONALES
                    </span>
                    <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#3B5249]"></span>
                </span>

                {/* ENCABEZADO */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
                    <h2 className="md:col-span-8 text-4xl sm:text-6xl font-medium tracking-tighter leading-none uppercase text-[#f5ecc2]">
                        Código & Diseño
                    </h2>
                    <p className="md:col-span-4 font-mono text-6 text-[#f5ecc2] leading-relaxed">
                        Haz clic en cualquier tarjeta para explorar el código fuente, la arquitectura y los detalles en GitHub.
                    </p>
                </div>
            </div>

            {/* CARRUSEL AUTOMÁTICO EN BUCLE */}
            <div className="w-full overflow-hidden py-10 flex">
                <motion.div
                    className="flex gap-8 md:gap-12 items-center w-max"
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        ease: "linear",
                        duration: 25,
                        repeat: Infinity,
                    }}
                >
                    {DOUBLE_PROJECTS.map((item, index) => (
                        <a
                            key={`${item.id}-${index}`}
                            href={item.link}
                            style={{ transform: `rotate(${item.rotation}deg)` }}
                            className="group relative flex-none hover:z-20 transition-transform duration-300 hover:scale-105"
                        >
                            {/* TARJETA DE PROYECTO  */}
                            <div className={`w-64 sm:w-80 md:w-96 ${item.aspectRatio} bg-[#2A3735] border-b-2 border-[#3B5249] rounded-2xl p-4 shadow-2xl overflow-hidden flex flex-col justify-between group-hover:border-[#dd4027] transition-colors`}>



                                {/* Imagen del proyecto */}
                                <div className="relative w-full h-full rounded-lg overflow-hidden my-2">
                                    <img
                                        src={item.imageUrl}
                                        alt={item.title}
                                        className="w-full h-full object-cover contrast-125 transition-all duration-500"
                                    />
                                </div>

                                {/* Pie de la tarjeta  */}
                                <div className="flex justify-between items-end font-mono text-xs font-bold text-[#f5ecc2] mt-2 group-hover:text-[#D9381E] transition-colors">
                                    <div className="flex items-center gap-1">
                                        <span>{item.title}</span>
                                        <span>↗</span>
                                    </div>
                                    <span className="text-[10px] text-[#9DAFA9] uppercase font-normal tracking-wider">
                                        {item.category}
                                    </span>
                                </div>

                            </div>
                        </a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}