import AboutUs from "../components/About";
import Adventages from "../components/Adventages";
import HomeHeroSection from "../components/HomeHeroSection";
import OurPricing from "../components/OurPricing";
import Partners from "../components/Partners";
import Service from "../components/Service";
import Carousel from "../components/Slider";
import Testimonial from "../components/Testimonial";
import Video from "../components/Video";
import WhyChooseUs from "../components/WhyChooseUs";



function Home(){

    return(
        <>
            <HomeHeroSection />
            <Adventages />
            <AboutUs />
            <Service />
            <WhyChooseUs />
            <Video />
            <Testimonial />
            <OurPricing />
            <Partners />
            <Carousel />
        </>
    )
}
export default Home;