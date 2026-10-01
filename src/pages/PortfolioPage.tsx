
import {Footer} from "../components/Footer.tsx";
import {ProjectsSelector} from "../components/ProjectsSelector.tsx";

export default function PortfolioPage() {
    return (
        <div className="bg-[#f5ecc2] text-[#547076] font-sans selection:bg-[#dd4027] selection:text-black min-h-screen">
            <ProjectsSelector />
            <Footer/>
        </div>
    );}