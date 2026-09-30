export function ProfileStory() {
    return (
        <section className="border-t border-neutral-800 py-16">

            <span className="flex items-center mb-12 ">
  <span className="h-px flex-1 bg-linear-to-r from-transparent to-gray-300 dark:to-gray-600"></span>

  <span className="shrink-0 px-4 text-[#6C6C80]">Aptitudes</span>

  <span className="h-px flex-1 bg-linear-to-l from-transparent to-gray-300 dark:to-gray-600"></span>
            </span>
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 text-[#547076]">



                {/* Columna 1: Perfil Personal */}
                <div className="md:col-span-5 md:pr-12 md:border-r border-neutral-800 ">
                    <span className="font-mono text-xs  block mb-6" >[ PERFIL ]</span>
                    <p className="text-lg md:text-xl   font-normal leading-relaxed mb-6">
                        Desarrollador Frontend con formación en Aplicaciones Multiplataforma y un sólido trasfondo en
                        diseño gráfico y Bellas Artes.
                    </p>
                    <p className="text-sm text-neutral-500 leading-relaxed font-normal">
                        Especializado en transformar diseños complejos en interfaces web interactivas, accesibles y
                        optimizadas con TypeScript y React. Apasionado por la experiencia de usuario (UI/UX) y el
                        desarrollo de componentes reutilizables.
                    </p>
                </div>

                {/* Columna 2: Competencias Frontend & Tech */}
                <div className="md:col-span-3 md:px-8 md:border-r border-neutral-800">
                    <span className="font-mono text-xs  block mb-6 ">[ DESARROLLO & TECH ]</span>
                    <ul className="space-y-2 text-sm font-normal">
                        <li>React & TypeScript</li>
                        <li>JavaScript (ES6+)</li>
                        <li>Tailwind CSS / SASS</li>
                        <li>HTML5 & CSS3 Responsive</li>
                        <li>REST APIs & Git/GitHub</li>
                        <li>Spring Boot & JavaFX</li>
                        <li>C# & SQL / AWS</li>
                    </ul>
                </div>

                {/* Columna 3: Arte, Grabado & Diseño */}
                <div className="md:col-span-4 md:pl-8">
                    <span className="font-mono text-xs  block mb-6">[ DISEÑO & ARTES ]</span>
                    <ul className="space-y-2 text-sm  font-normal">
                        <li>UI/UX & Figma</li>
                        <li>Adobe Photoshop & InDesign</li>
                        <li>Técnicas de Grabado</li>
                        <li>Dibujo Tradicional & Óleo</li>
                        <li>Ilustración Digital</li>
                        <li>Composición & Diseño Gráfico</li>
                    </ul>
                </div>

            </div>
        </section>
    );
}