import { FooterMenuQuicklinks, FooterMenuSupport } from "../data/navigations";
import { Link } from "react-router-dom";
function SiteFooter() {
    return(
        <footer data-aos="fade-up" data-aos-duration="1000" className="footer">
			<div className="footer__container">
				<div className="footer__top">
					<div className="footer__column">
						<div className="footer__logo">
							<img src="img/icons/logo.svg" alt="" />
						</div>
						<ul className="footer__links links-footer">
						
							<li className="links-footer__link">
								<a href="https://twitter.com" rel="noreferrer nofollow" target="_blank" className="_icon-twitter" />
							</li>
							<li className="links-footer__link">
								<a href="https://www.facebook.com" rel="noreferrer nofollow" target="_blank" className="_icon-facebook" />
							</li>
							<li className="links-footer__link">
								<a href="https://www.instagram.com" rel="noreferrer nofollow" target="_blank" className="_icon-instagram" />
							</li>
							<li className="links-footer__link">
								<a href="https://github.com" rel="noreferrer nofollow" target="_blank" className="_icon-github" />
							</li>
						</ul>
					</div>
					<nav className="footer__menu menu-footer">
						<div className="menu-footer__column">
							<h6 className="menu-footer__title">Quicklinks</h6>
							<ul className="menu-footer__list">
								{FooterMenuQuicklinks.map((item, index) => {
									return (
										<li className="menu-footer__item" key={index}>
											<Link to={item.to}>{item.title}</Link>
										</li>
										)
								})}
							</ul>
						</div>
						<div className="menu-footer__column">
							<h6 className="menu-footer__title">Support</h6>
							<ul className="menu-footer__list">
								{FooterMenuSupport.map((item, index) => {
									return (
										<li className="menu-footer__item" key={index}>
											<Link to={item.to}>{item.title}</Link>
										</li>
										)
								})}
							</ul>
						</div>
						<div className="menu-footer__column">
							<h6 className="menu-footer__title">Need Help?</h6>
							<ul className="menu-footer__list">
								<li className="menu-footer__item _icon-location">
									<a href="https://www.google.com/maps/place/West+Kalimantan+Radakng+House/@-0.0466491,109.3146146,16.25z" rel="noreferrer nofollow" target="_blank" >Tanjung Sari Street no.48, Pontianak City</a>
								</li>
								<li className="menu-footer__item _icon-message">
									<a href="mailto:Support@VRNas.com?subject = Feedback&body = Message" rel="noreferrer nofollow" target="_blank">Support@VRNas.com</a>
								</li>
								<li className="menu-footer__item _icon-phone">
									<a href="tel:1234567890">+123 456 7890</a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
				<div className="footer__copy">© Copyright 2023, All Rights Reserved</div>
			</div>
		</footer>
    )
}
export default SiteFooter;