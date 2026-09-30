import { NavLink } from "react-router";

export function Footer() {
    return (
        <footer className="border-t border-neutral-800 py-12 px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-xs text-neutral-500">
            <div>GUILLERMO GARCÍA HUALDE — PORTFOLIO 2026</div>
            <div className="flex gap-6">
                <NavLink to="/portfolio" className="hover:text-[#a84222]">PORTFOLIO</NavLink>
                <NavLink to="/bio" className="hover:text-[#a84222]">BIO</NavLink>
                <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=guillermo.hualde@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#a84222] transition-colors cursor-pointer"
                >
                    GMAIL
                </a>

                <a
                    href="https://github.com/GuillermoHualde"
                    className="hover:text-[#a84222] transition-colors cursor-pointer"
                >
                    GITHUB
                </a>
            </div>
        </footer>
    );
}