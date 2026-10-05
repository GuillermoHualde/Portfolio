import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function HeroCanvas() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const card1Y = useTransform(scrollYProgress, [0, 1], [0, -320]);
    const card1Rotate = useTransform(scrollYProgress, [0, 1], [-8, -22]);

    const card2Y = useTransform(scrollYProgress, [0, 1], [0, -420]);
    const card2Rotate = useTransform(scrollYProgress, [0, 1], [12, 28]);

    const card3Y = useTransform(scrollYProgress, [0, 1], [0, 280]);
    const card3Rotate = useTransform(scrollYProgress, [0, 1], [6, -14]);

    return (
        <section ref={containerRef} className="relative h-[250vh]">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-between px-6 md:px-12 pt-16">

                {/* Lado Izquierdo */}
                <div className="z-10 max-w-2xl">
                    <p className="font-sans text-xs md:text-4xl text-neutral-400 mb-6 font-normal tracking-tight">
                        Guillermo García Hualde.
                    </p>

                    <h1 className="text-6xl sm:text-7xl lg:text-8xl font-medium tracking-tighter leading-[0.9] uppercase select-none">
                        <span className="text-[#547076] italic font-normal">Desarrollador </span> De Aplicaciones <br />
                        <span className="text-[#4A5E5E]">Multiplataforma</span> y <br />
                        Diseñador <span className="text-[#dd4027]">Gráfico.</span>
                    </h1>
                </div>

                {/* Lado Derecho */}
                <div className="hidden lg:block relative w-[45%] h-[70vh]">
                    {/* Postal 1 */}
                    <motion.div
                        style={{ y: card1Y, rotate: card1Rotate }}
                        className="absolute top-[10%] left-[5%] w-64 aspect-[4/3]  rounded-2xl p-4 "
                    >
                        <div className="w-full h-full bg-[#547076] rounded-lg p-4 flex flex-col justify-between text-[#f5ecc2] font-mono">
                            <span className="text-xs font-bold">Proyectos en :</span>
                            <span className="text-2xl font-bold tracking-tighter">JAVA</span>
                        </div>
                    </motion.div>

                    {/* Postal 2 */}
                    <motion.div
                        style={{ y: card2Y, rotate: card2Rotate }}
                        className="absolute top-[35%] right-[10%] w-72 aspect-[4/3]  rounded-2xl p-4 "
                    >
                        <div className="w-full h-full bg-[#dd4027] rounded-lg p-4  flex flex-col justify-between text-[#f5ecc2] font-mono text-xs">
                            <span className="">Proyectos en :</span>
                            <span className="text-lg font-sans">Kotlin y Android Studio</span>
                        </div>
                    </motion.div>

                    {/* Postal 3 */}
                    <motion.div
                        style={{ y: card3Y, rotate: card3Rotate }}
                        className="absolute bottom-[5%] left-[25%] w-56 aspect-[3/4]  rounded-2xl p-3  overflow-hidden"
                    >
                        <img
                            src="../assets/GuilleFoto.png"
                            alt="Guillermo García"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>

            </div>
        </section>
    );
}