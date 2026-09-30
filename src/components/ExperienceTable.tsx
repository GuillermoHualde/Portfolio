export function ExperienceTable() {
    const experiences = [
        { year: "2026", title: "Altin Solutions", type: "Programador y Analista de Datos", status: "INFOR / ENGINE ↗" },
        { year: "2025", title: "Montara Biolabs", type: "Programador Frontend", status: "WORDPRESS / JS ↗" },
        { year: "2024 - 2026", title: "G.S. Desarrollo de Aplicaciones Multiplataforma", type: "Formación Académica", status: "DAM ↗" },
        { year: "2023 - 2024", title: "Benveniste Contemporary", type: "Estampador Profesional", status: "TALLER ↗" },
        { year: "2021 - 2023", title: "G.S. Grabado y Estampación (Artediez)", type: "Formación Académica", status: "ARTEDIEZ ↗" },
    ];

    return (
        <section className="border-t border-neutral-800 py-16">
            <div className="max-w-7xl mx-auto px-6">

                <span className="flex items-center mb-12">
  <span className="h-px flex-1 bg-linear-to-r from-transparent to-gray-300 dark:to-gray-600"></span>

  <span className="shrink-0 px-4 font-mono text-xs text-[#547076] ">EXPERIENCIA & FORMACIÓN</span>

  <span className="h-px flex-1 bg-linear-to-l from-transparent to-gray-300 dark:to-gray-600"></span>
</span>

                <div className="border-t border-neutral-800">
                    {experiences.map((item, index) => (
                        <div
                            key={index}
                            className="py-6 border-b border-neutral-800 grid grid-cols-12 gap-4 items-center hover:bg-neutral-900/50 transition-colors px-2 cursor-pointer group"
                        >
                            <span
                                className="col-span-3 md:col-span-2 font-mono text-xs ">{item.year} </span>
                            <span
                                className="col-span-9 md:col-span-4 text-lg md:text-xl font-medium group-hover:text-[#a84222] transition-colors">{item.title}</span>
                            <span
                                className="hidden md:block md:col-span-4 font-mono text-xs ">{item.type}</span>
                            <span
                                className="hidden md:block md:col-span-2 text-right font-mono text-xs  group-hover:text-white transition-colors">{item.status}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}