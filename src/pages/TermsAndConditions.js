import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import TermsConditions from "../components/TermsConditions";
function TermsAndConditions() {

    return(
		<>
        <HeroSection>
            <section className="page__top top-page">
				<div className="top-page__container">
					<h1 className="top-page__title">Terms & Conditions</h1>
					<nav className="top-page__breadcrumbs">
						<ul className="top-page__list">
							<li className="top-page__item">
                                <Link to="/">Home </Link>
                            </li>
							<li className="top-page__item">
								<Link to="#">Terms & Conditions</Link>
							</li>
						</ul>
					</nav>
				</div>
			</section>
        </HeroSection>
		<TermsConditions />
		</>
    )
}
export default TermsAndConditions;