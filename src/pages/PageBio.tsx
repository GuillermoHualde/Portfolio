
import {AboutMeSection} from "../components/AboutMe.tsx";
import {SkillsSection} from "../components/SkillsSection.tsx";
import {Footer} from "../components/Footer.tsx";

export function PageBio() {
    return (
    <div className="bg-[#f5ecc2] text-[#547076] font-sans selection:bg-[#dd4027] selection:text-black min-h-screen">
        <AboutMeSection />
        <SkillsSection />
        <Footer/>
    </div>
);}