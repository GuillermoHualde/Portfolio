import { NavLink } from "react-router";

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6 font-sans">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                {/* 1. Monograma / Badge Izquierda */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="w-10 h-10 rounded-full bg-neutral-100 text-black flex items-center justify-center font-bold text-sm tracking-tighter hover:scale-105 transition-transform cursor-pointer"
                    title="Volver arriba"
                >
                    <svg
                        className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                    </svg>
                </button>


                {/* 2. Navegación Flotante Tipo Píldora (Centro) */}
                <nav className="flex items-center gap-1 bg-neutral-900/90 backdrop-blur-md border border-neutral-800 p-1.5 rounded-full shadow-2xl">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            `px-4 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all ${
                                isActive
                                    ? "bg-neutral-100 text-black shadow-sm"
                                    : "text-neutral-400 hover:text-white"
                            }`
                        }
                    >
                        Inicio
                    </NavLink>

                    <NavLink
                        to="/portfolio"
                        className={({ isActive }) =>
                            `px-4 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all ${
                                isActive
                                    ? "bg-neutral-100 text-black shadow-sm"
                                    : "text-neutral-400 hover:text-white"
                            }`
                        }
                    >
                        Proyectos
                    </NavLink>

                    <NavLink
                        to="/bio"
                        className={({ isActive }) =>
                            `px-4 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all ${
                                isActive
                                    ? "bg-neutral-100 text-black shadow-sm"
                                    : "text-neutral-400 hover:text-white"
                            }`
                        }
                    >
                        Sobre mí
                    </NavLink>
                </nav>

                {/* 3. Botón Destacado Derecha */}
                <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=guillermo.hualde@gmail.com"
                    className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-700 bg-neutral-900/50 hover:bg-neutral-100 hover:text-black text-xs font-mono tracking-tight transition-all"
                >
                    <span className="w-2 h-2 rounded-full bg-[#FF4000] animate-pulse"></span>
                    CONTACTAR
                </a>

            </div>
        </header>
    );
}