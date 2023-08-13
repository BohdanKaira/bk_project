import HeroSection from "../components/HeroSection";
import { Link } from "react-router-dom";
function About() {
    return(
        <HeroSection>
            <section className="page__top top-page">
				<div className="top-page__container">
					<h1 className="top-page__title">About Us</h1>
					<nav className="top-page__breadcrumbs">
						<ul className="top-page__list">
							<li className="top-page__item">
                                <Link to="/">Home </Link>
                            </li>
							<li className="top-page__item">
								<Link to="#">About Us</Link>
							</li>
						</ul>
					</nav>
				</div>
			</section>
        </HeroSection>
    )
}
export default About;