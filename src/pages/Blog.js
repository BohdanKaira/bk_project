import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import BlogList from "../components/BlogList";
function Blog() {

    return(
		<>
			<HeroSection>
				<section className="page__top top-page">
					<div className="top-page__container">
						<h1 className="top-page__title">Blog</h1>
						<nav className="top-page__breadcrumbs">
							<ul className="top-page__list">
								<li className="top-page__item">
									<Link to="/">Home </Link>
								</li>
								<li className="top-page__item">
									<Link to="#">Blog</Link>
								</li>
							</ul>
						</nav>
					</div>
				</section>
			</HeroSection>
			<BlogList />
		</>
    )
}
export default Blog;