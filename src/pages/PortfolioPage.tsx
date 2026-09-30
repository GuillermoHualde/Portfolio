export default function PortfolioPage() {
    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans p-8 md:p-16">
            {/* Hero */}
            <section className="max-w-4xl mb-32">
                <h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-none mb-6">
                    Desarrollador Software & Diseñador Gráfico.
                </h1>
                <p className="text-xl text-neutral-400 font-light max-w-2xl">
                    Escribo código limpio y arquitectura moderna, combinándolo con exploración visual y arte digital.
                </p>
            </section>

            {/* Grid de Proyectos / Bento */}
            <section id="code" className="mb-32">
                <div className="flex justify-between items-end mb-8">
                    <h2 className="text-2xl font-medium">Proyectos Destacados</h2>
                    <span className="font-mono text-xs text-neutral-500">SELECTED WORKS (2024-2026)</span>
                </div>

                {/* Aquí tus proyectos de programación */}
            </section>
        </div>
    );
}