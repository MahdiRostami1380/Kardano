import About from "@/sections/About";
import CommonQuestions from "@/sections/CommonQuestions";
import Header from "@/sections/Header";
import BlogsSection from "@/sections/BlogsSection";
import HowsWork from "@/sections/HowsWork";
import Register from "@/sections/Register";
import Videos from "@/sections/Videos";
import VIPTeacher from "@/sections/VIPTeacher";
import WhyKardano from "@/sections/WhyKardano";
import Description from "@/sections/Description";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Videos />
      <About />
      <HowsWork />
      <VIPTeacher />
      <Register />
      <WhyKardano />
      <CommonQuestions />
      <BlogsSection />
      <Description />
      <Footer />
    </>
  );
}
