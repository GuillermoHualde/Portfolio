import { NavLink } from "react-router";

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 p-3 sm:p-4 md:p-6 font-sans mix-blend-difference">
            <div className="max-w-7xl mx-auto flex items-center justify-center sm:justify-between relative">

                {/* Badge Izquierda */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="absolute left-0 sm:static w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white text-black flex items-center justify-center font-bold text-xs sm:text-sm tracking-tighter hover:scale-105 transition-transform cursor-pointer shadow-md"
                    title="Volver arriba"
                >
                    <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                    </svg>
                </button>

                {/* Píldora */}
                <nav className="flex items-center gap-0.5 sm:gap-1 bg-white/20 backdrop-blur-md border border-white/30 p-1 sm:p-1.5 rounded-full shadow-2xl">
                    <NavLink
                        to="/"
                        onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}
                        end
                        className={({ isActive }) =>
                            `px-3 sm:px-4 py-1.2 sm:py-1.5 rounded-full text-[11px] sm:text-xs md:text-sm font-medium transition-all ${
                                isActive
                                    ? "bg-white text-black shadow-sm"
                                    : "text-white/70 hover:text-white"
                            }`
                        }
                    >
                        Inicio
                    </NavLink>

                    <NavLink
                        to="/portfolio"
                        onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}
                        className={({ isActive }) =>
                            `px-3 sm:px-4 py-1.2 sm:py-1.5 rounded-full text-[11px] sm:text-xs md:text-sm font-medium transition-all ${
                                isActive
                                    ? "bg-white text-black shadow-sm"
                                    : "text-white/70 hover:text-white"
                            }`
                        }
                    >
                        Proyectos
                    </NavLink>

                    <NavLink
                        to="/bio"
                        onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}
                        className={({ isActive }) =>
                            `px-3 sm:px-4 py-1.2 sm:py-1.5 rounded-full text-[11px] sm:text-xs md:text-sm font-medium transition-all ${
                                isActive
                                    ? "bg-white text-black shadow-sm"
                                    : "text-white/70 hover:text-white"
                            }`
                        }
                    >
                        Sobre mí
                    </NavLink>
                </nav>

                {/* Botón Contactar */}
                <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=guillermo.hualde@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/40 bg-white/10 hover:bg-white hover:text-black text-xs font-mono tracking-tight transition-all text-white"
                >
                    <span className="w-2 h-2 rounded-full bg-[#FF4000] animate-pulse"></span>
                    CONTACTAR
                </a>

            </div>
        </header>
    );
}