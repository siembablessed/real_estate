import SunshineImage from "../images/FullSunshine.png"
import "../styles/pages.css"
import Propertycards from "../components/Cards";
import AboutSection from "../components/AboutSection";
import RealEstateSection from "../components/RealEstateSection";
import LeasingSection from "../components/Leasing_Sect";
import TestimonialSlider from "../components/TestimonialSlider";
import Contact from "../components/Contact";
import Homepag from "../components/homecomponent"
import Footer from "../components/Footer"
import HomeComponent from "../components/HomeSection"
export default function Home() {
    return (
      <div>
      <section className="my-home">
        <div className="container">
          {/* <Homepag /> */}
          <HomeComponent />
        </div>
      </section>

      <section>
        <div className="container">
          <h1 className="mngtxt">Expert Management for Properties, Tenants, and Real <br /> Estate Investments</h1>
          <Propertycards />
        </div>
      </section>

      <section className="About-Sect">
        <AboutSection/>
      </section>

      <section>
        <RealEstateSection/>
      </section>

      <section>
        <LeasingSection/>
      </section>

      <section>
        <div className="container">
        <TestimonialSlider/>
        </div>
      </section>

      <section>
        <Contact/>
      </section>

      <section>
        <img src={SunshineImage} alt="" className="sunshine-image" />
      </section>

      <section>
        <Footer />
      </section>
      </div>

      
    );
  }