import FirstCoursesSection from "../components/FirstCoursesSection";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import MainSlider from "../components/MainSlider";
import SecondCoursesSection from "../components/SecondCoursesSection";
import firstBgImg from "../assets/background1.png";
import manImg from "../assets/why-img-man.png";
import man2Img from "../assets/man-2.png";
import CoursesSlider from "../components/CoursesSlider";
import SecondHeroSection from "../components/SecondHeroSection";
import TestmonialsSection from "../components/TestmonialsSection";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <div className="w-[90%] m-auto">
        <Header />
        <MainSlider />
        <FirstCoursesSection />
        <SecondCoursesSection />
      </div>
      <HeroSection bgImg={firstBgImg} otherImg={manImg} />
      <div className="w-[90%] m-auto">
        <CoursesSlider />
      </div>
      <SecondHeroSection bgImg={firstBgImg} otherImg={man2Img} />
      <TestmonialsSection />
      <Footer/>
    </>
  );
}
