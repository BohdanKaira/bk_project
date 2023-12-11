import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import ContactMap from "../components/Map";
function ContactUs() {
    return(
		<>
			<HeroSection>
				<section className="page__top top-page">
					<div className="top-page__container">
						<h1 className="top-page__title">Contact Us</h1>
						<nav className="top-page__breadcrumbs">
							<ul className="top-page__list">
								<li className="top-page__item">
									<Link to="/">Home </Link>
								</li>
								<li className="top-page__item">
									<Link to="#">Contact Us</Link>
								</li>
							</ul>
						</nav>
					</div>
				</section>
			</HeroSection>
			<ContactInfo />
			<ContactForm />
			<ContactMap />
		</>
        
    )
}
export default ContactUs;