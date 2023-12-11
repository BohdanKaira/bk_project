import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import OneService from "../components/OneService";
import VideoService from "../components/VideoService";
import OurPricingService from "../components/OurPricingService";
function DetailService() {

    return(
        
		<>
			<HeroSection>
				<section className="page__top top-page">
					<div className="top-page__container">
						<h1 className="top-page__title">Detail Service</h1>
						<nav className="top-page__breadcrumbs">
							<ul className="top-page__list">
								<li className="top-page__item">
									<Link to="/service">Service </Link>
								</li>
								<li className="top-page__item">
									<Link to="#">Detail Service</Link>
								</li>
							</ul>
						</nav>
					</div>
				</section>
			</HeroSection>
			<OneService />
			<VideoService />
			<OurPricingService />
		</>
    )
}
export default DetailService;