import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import GuilleFoto from "../assets/GuilleFoto.png";

export function HeroCanvas() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Animaciones para pantallas grandes (Desktop Parallax)
    const card1Y = useTransform(scrollYProgress, [0, 1], [0, -320]);
    const card1Rotate = useTransform(scrollYProgress, [0, 1], [-8, -22]);

    const card2Y = useTransform(scrollYProgress, [0, 1], [0, -420]);
    const card2Rotate = useTransform(scrollYProgress, [0, 1], [12, 28]);

    const card3Y = useTransform(scrollYProgress, [0, 1], [0, 280]);
    const card3Rotate = useTransform(scrollYProgress, [0, 1], [6, -14]);

    return (
        <section ref={containerRef} className="relative min-h-screen lg:h-[250vh]">
            <div className="lg:sticky lg:top-0 min-h-screen w-full overflow-hidden flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 pt-20 lg:pt-16 pb-12">

                {/* LADO IZQUIERDO: TEXTO PRINCIPAL */}
                <div className="z-10 max-w-2xl w-full text-left">
                    <p className="font-sans text-sm sm:text-lg md:text-3xl text-neutral-400 mb-4 sm:mb-6 font-normal tracking-tight">
                        Guillermo García Hualde.
                    </p>

                    <h1 className="text-4xl sm:text-6xl lg:text-8xl font-medium tracking-tighter leading-[0.95] sm:leading-[0.9] uppercase select-none">
                        <span className="text-[#547076] italic font-normal">Desarrollador </span> De Aplicaciones <br />
                        <span className="text-[#4A5E5E]">Multiplataforma</span> y <br />
                        Diseñador <span className="text-[#dd4027]">Gráfico.</span>
                    </h1>
                </div>

                {/* VISTA MÓVIL  */}
                <div className="lg:hidden w-full mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 items-center justify-center">
                    {/* Tarjeta 1 - Java */}
                    <div className="bg-[#547076] rounded-xl p-4 flex flex-col justify-between text-[#f5ecc2] font-mono -rotate-3 shadow-lg h-32">
                        <span className="text-[10px] font-bold uppercase tracking-wider">Proyectos en:</span>
                        <span className="text-xl font-bold tracking-tighter">JAVA</span>
                    </div>

                    {/* Tarjeta 2 - Android */}
                    <div className="bg-[#dd4027] rounded-xl p-4 flex flex-col justify-between text-[#f5ecc2] font-mono text-xs rotate-3 shadow-lg h-32">
                        <span className="text-[10px] uppercase tracking-wider">Proyectos en:</span>
                        <span className="text-sm font-sans font-medium">Kotlin & Android</span>
                    </div>

                    {/* Tarjeta 3 - Foto */}
                    <div className="col-span-2 sm:col-span-1 h-36 rounded-xl overflow-hidden shadow-lg border border-[#3B5249]/40 -rotate-1">
                        <img
                            src={GuilleFoto}
                            alt="Guillermo García"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* LADO DERECHO: VISTA ORDENADOR */}
                <div className="hidden lg:block relative w-[45%] h-[70vh]">
                    {/* Postal 1 */}
                    <motion.div
                        style={{ y: card1Y, rotate: card1Rotate }}
                        className="absolute top-[10%] left-[5%] w-64 aspect-[4/3] rounded-2xl p-4"
                    >
                        <div className="w-full h-full bg-[#547076] rounded-lg p-4 flex flex-col justify-between text-[#f5ecc2] font-mono shadow-2xl">
                            <span className="text-xs font-bold">Proyectos en :</span>
                            <span className="text-2xl font-bold tracking-tighter">JAVA</span>
                        </div>
                    </motion.div>

                    {/* Postal 2 */}
                    <motion.div
                        style={{ y: card2Y, rotate: card2Rotate }}
                        className="absolute top-[35%] right-[10%] w-72 aspect-[4/3] rounded-2xl p-4"
                    >
                        <div className="w-full h-full bg-[#dd4027] rounded-lg p-4 flex flex-col justify-between text-[#f5ecc2] font-mono text-xs shadow-2xl">
                            <span>Proyectos en :</span>
                            <span className="text-lg font-sans">Kotlin y Android Studio</span>
                        </div>
                    </motion.div>

                    {/* Postal 3 */}
                    <motion.div
                        style={{ y: card3Y, rotate: card3Rotate }}
                        className="absolute bottom-[5%] left-[25%] w-56 aspect-[3/4] rounded-2xl p-3 overflow-hidden shadow-2xl"
                    >
                        <img
                            src={GuilleFoto}
                            alt="Guillermo García"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </motion.div>
                </div>

            </div>
        </section>
    );
}