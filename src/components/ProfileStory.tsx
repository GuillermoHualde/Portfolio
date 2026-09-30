export function ProfileStory() {
    return (
        <section className="bg-[#1E2827] text-[#f5ecc2] py-20 border-t border-[#3B5249]/40">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* SEPARADOR ESTILO PORTFOLIO */}
                <span className="flex items-center mb-16">
                    <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#3B5249]"></span>
                    <span className="shrink-0 px-6 font-mono text-sm uppercase tracking-widest text-[#547076] font-semibold">
                         APTITUDES
                    </span>
                    <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#3B5249]"></span>
                </span>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-0 text-[#f5ecc2]">

                    {/* Columna 1: Perfil Personal */}
                    <div className="md:col-span-5 md:pr-12 md:border-r border-[#3B5249]/40">
                        <span className="font-mono text-sm uppercase tracking-wider text-[#dd4027] font-semibold block mb-6">
                            PERFIL
                        </span>
                        <p className="text-xl sm:text-2xl font-normal leading-relaxed mb-6 text-[#f5ecc2]">
                            Desarrollador Frontend con formación en Aplicaciones Multiplataforma y un sólido trasfondo en
                            diseño gráfico y Bellas Artes.
                        </p>
                        <p className="font-mono text-base text-[#9DAFA9] leading-relaxed font-normal">
                            Especializado en transformar diseños complejos en interfaces web interactivas, accesibles y
                            optimizadas con TypeScript y React. Apasionado por la experiencia de usuario (UI/UX) y el
                            desarrollo de componentes reutilizables.
                        </p>
                    </div>

                    {/* Columna 2: Competencias Frontend & Tech */}
                    <div className="md:col-span-3 md:px-8 md:border-r border-[#3B5249]/40">
                        <span className="font-mono text-sm uppercase tracking-wider text-[#dd4027] font-semibold block mb-6">
                             DESARROLLO & TECH
                        </span>
                        <ul className="space-y-3 font-mono text-base text-[#f5ecc2]/90 font-normal">
                            <li className="flex items-center gap-2">
                                <span className="text-[#dd4027] text-xs">◆</span> React & TypeScript
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-[#dd4027] text-xs">◆</span> JavaScript (ES6+)
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-[#dd4027] text-xs">◆</span> Tailwind CSS / SASS
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-[#dd4027] text-xs">◆</span> HTML5 & CSS3 Responsive
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-[#dd4027] text-xs">◆</span> REST APIs & Git/GitHub
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-[#dd4027] text-xs">◆</span> Spring Boot & JavaFX
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-[#dd4027] text-xs">◆</span> C# & SQL / AWS
                            </li>
                        </ul>
                    </div>

                    {/* Columna 3: Arte, Grabado & Diseño */}
                    <div className="md:col-span-4 md:pl-8">
                        <span className="font-mono text-sm uppercase tracking-wider text-[#dd4027] font-semibold block mb-6">
                             DISEÑO & ARTES
                        </span>
                        <ul className="space-y-3 font-mono text-base text-[#f5ecc2]/90 font-normal">
                            <li className="flex items-center gap-2">
                                <span className="text-[#547076] text-xs">◆</span> UI/UX & Figma
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-[#547076] text-xs">◆</span> Adobe Photoshop & InDesign
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-[#547076] text-xs">◆</span> Técnicas de Grabado
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-[#547076] text-xs">◆</span> Dibujo Tradicional & Óleo
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-[#547076] text-xs">◆</span> Ilustración Digital
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-[#547076] text-xs">◆</span> Composición & Diseño Gráfico
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}