import { HeroCanvas } from "../components/HeroCanvas";
import { ProfileStory } from "../components/ProfileStory";
import { ExperienceTable } from "../components/ExperienceTable";
import { Footer } from "../components/Footer";
import {ProjectCarouselSection} from "../components/ProjectCarouselSection.tsx";

export function HomePage() {
    return (
        <div className="bg-[#f5ecc2] text-[#547076] font-sans selection:bg-[#dd4027] selection:text-black min-h-screen">
            <HeroCanvas />
            <ProfileStory />
            <ExperienceTable />
            <ProjectCarouselSection/>
            <Footer />
        </div>
    );
}