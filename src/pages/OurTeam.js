import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import Team from "../components/Team";
import Statistic from "../components/statistic";
function OurTeam() {

    return(
		<>
			<HeroSection>
				<section className="page__top top-page">
					<div className="top-page__container">
						<h1 className="top-page__title">Our team</h1>
						<nav className="top-page__breadcrumbs">
							<ul className="top-page__list">
								<li className="top-page__item">
									<Link to="/">Home </Link>
								</li>
								<li className="top-page__item">
									<Link to="#">Our team</Link>
								</li>
							</ul>
						</nav>
					</div>
				</section>
			</HeroSection>
			<Team />
			<Statistic />
		</>
    )
}
export default OurTeam;