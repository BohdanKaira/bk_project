import PriceMan from './../img/decor/price-man.webp'
import TermsConditionsData from './../data/TermsConditionsData.json'
function TermsConditions() {

    return (
        <section className="page__teams-conditions terms-conditions">
				<div className="terms-conditions__body">
					<h3 data-aos="fade-down" data-aos-duration="500" data-aos-delay="400" className="terms-conditions__subtitle _subtitle">
						Tems & Conditions
					</h3>
					<h2 data-aos="fade-down" data-aos-duration="500" data-aos-delay="200" className="terms-conditions__title _title">
						Terms and Conditions
					</h2>
					<p data-aos="fade-down" data-aos-duration="500" data-aos-delay="400" className="terms-conditions__text _text">
						Welcome to VRNas. Please read these Terms and Conditions carefully
						before using our website and services.
					</p>
					<div className="terms-conditions__content content-terms-conditions">
                        {TermsConditionsData.map((item, index) => (
                            <div key={index} data-aos="fade-right" data-aos-duration="500" className="content-terms-conditions__item">
                                <h5 className="content-terms-conditions__title">
                                    {item.title}
                                </h5>
                                <p className="content-terms-conditions__text _text">
                                    {item.text}
                                </p>
                                {item.listItems && item.listItems.length > 0 && (
                                    <ul className="content-terms-conditions__list">
                                        {item.listItems.map((listItem, listItemIndex) => (
                                            <li key={listItemIndex} className="content-terms-conditions__paragraph _text">
                                                {listItem}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="faq-page__decor faq-page__decor_left">
                        <img src={PriceMan} alt="" />
                    </div>
                    <div className="faq-page__decor faq-page__decor_right">
                        <img src={PriceMan} alt="" />
                    </div>
                </div>
			</section>
    )
}
export default TermsConditions;