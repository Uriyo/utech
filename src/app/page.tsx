import Image from "next/image";
import HeroSection from "./Components/home/HeroSection";
import ToolsSection from "./Components/toolsSection/ToolSection";
import JoinLearningSection from "./Components/LearnSection/JoinLearningSection";
import AppSection from "./Components/appSection/AppSection";
import MeetSection from "./Components/MeetSection/MeetSection";
import CoolFeaturesSection from "./Components/FeaturesSection/CoolFeaturesSection";
import Footer from "./Components/Footer";
import HorizontalSlider from "./Components/Slider/HorizontalSlider";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
        <HeroSection/>
      
      <ToolsSection/>
      
      <AppSection/>
      <MeetSection/>
      <HorizontalSlider/>
      <CoolFeaturesSection/>
      <JoinLearningSection/>
      <Footer/>
    </main>
  );
}
