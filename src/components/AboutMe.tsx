export function AboutMeSection() {
    return (
        <section className="bg-[#f5ecc2] text-[#547076] py-24 md:py-32 border-t border-[#3B5249]/40 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* SEPARADOR */}
                <span className="flex items-center mb-16">
                    <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#3B5249]"></span>
                    <span className="shrink-0 px-6 font-mono text-sm uppercase tracking-widest text-[#547076] font-semibold">
                         SOBRE MÍ
                    </span>
                    <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#3B5249]"></span>
                </span>

                {/* CONTENEDOR PRINCIPAL GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* COLUMNA IZQUIERDA*/}
                    <div className="lg:col-span-7 space-y-8">
                        <div>
                            <p className="font-mono text-sm uppercase tracking-wider text-[#dd4027] mb-3 font-semibold">
                                Perfil Híbrido
                            </p>
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tighter leading-[1.02] uppercase">
                                Desarrollador  <br />
                                <span className="text-[#547076] italic font-normal">Frontend</span> y <br />
                                <span className="text-[#dd4027]">y Multiplataforma.</span>
                            </h2>
                        </div>

                        {/* BLOQUES DE TEXTO */}
                        <div className="space-y-5 font-mono text-base sm:text-lg text-[#547076]/90 leading-relaxed border-l-2 border-[#3B5249] pl-6 py-1">
                            <p>
                                Desarrollador especializado en <strong className="text-[#4A5E5E] font-semibold">Aplicaciones Multiplataforma (DAM)</strong> con un sólido trasfondo en <strong className="text-[#dd4027] font-semibold">Bellas Artes, Grabado y Diseño Gráfico</strong>.
                            </p>
                            <p className="text-[#547076]">
                                Soy una persona apasionada tanto por
                                el mundo del arte como por la informática. Soy multidisciplinar y creativo e intento compaginar los dos mundos,
                                emprendiendo tanto en el trabajo como en mis proyectos personales.
                            </p>
                        </div>

                        {/* ETIQUETAS */}
                        <div className="pt-2 flex flex-wrap gap-2.5 font-mono text-xs sm:text-sm">

                            <span className="bg-[#2A3735] border border-[#3B5249] px-4 py-2 rounded-full text-[#f5ecc2]">
                                 Grabado & Ilustración
                            </span>
                            <span className="bg-[#2A3735] border border-[#3B5249] px-4 py-2 rounded-full text-[#f5ecc2]">
                               Desarrollo de Aplicaciones Multiplataforma
                            </span>
                        </div>
                    </div>

                    {/* COLUMNA DERECHA: FOTO CON ESTILO POSTAL/TARJETA */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-sm aspect-[3/4] group">

                            {/* Marco Decorativo Trasero (Efecto Capa) */}
                            <div className="absolute inset-0 bg-[#547076]/20 rounded-2xl transform rotate-3 scale-95 group-hover:rotate-6 transition-transform duration-300"></div>

                            {/* Tarjeta Principal */}
                            <div className="relative w-full h-full bg-[#2A3735] border-b-4 border-[#dd4027] rounded-2xl p-4 shadow-2xl overflow-hidden flex flex-col justify-between transform -rotate-2 group-hover:rotate-0 transition-transform duration-300">



                                {/* Contenedor de la Imagen */}
                                <div className="relative w-full flex-1 rounded-lg overflow-hidden my-2 border border-[#3B5249]/40">
                                    <img
                                        src="../assets/GuilleFotoReal.jpg"
                                        alt="Guillermo García Hualde"
                                        className="w-full h-full object-cover contrast-110 group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Pie de la postal */}
                                <div className="flex justify-between items-end font-mono text-sm font-bold text-[#f5ecc2] mt-2">
                                    <div className="flex items-center gap-1">
                                        <span>GUILLERMO GARCÍA
                                            HUALDE</span>

                                    </div>
                                    <span className="text-xs text-[#9DAFA9] uppercase font-normal tracking-wider">
                                        FRONTEND & ART
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}