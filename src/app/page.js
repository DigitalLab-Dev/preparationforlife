import AboutUsSection from "./Home/AboutUsSection";
import BenefitsSection from "./Home/BenefitsSection";
import DestinationsSection from "./Home/DestinationSection";
import HomeHero from "./Home/HomeHero";
import StudentTestimonials from "./Home/StudentTestimonials";

export default function Page(){
  return(
    <main>
      <HomeHero/>
      <AboutUsSection/>
      <BenefitsSection/>
      <DestinationsSection/>
      <StudentTestimonials/>
    </main>
  )
}