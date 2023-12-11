import PrivacyPolicyData from './../data/PrivacyPolicyData.json'
import { PrivacyPolicyContent } from '../data/SectionText';
import PriceMan from './../img/decor/price-man.webp'
function PrivacyPolicyPage() {
    return (
        <section className="page__teams-conditions terms-conditions">
            <div className="terms-conditions__body">
                <h3 data-aos="fade-down" data-aos-duration="500" data-aos-delay="400" className="terms-conditions__subtitle _subtitle">
                    {PrivacyPolicyContent.h3}
                </h3>
                <h2 data-aos="fade-down" data-aos-duration="500" data-aos-delay="200" className="terms-conditions__title _title">
					{PrivacyPolicyContent.h2}
                </h2>
                <p data-aos="fade-down" data-aos-duration="500" data-aos-delay="400" className="terms-conditions__text _text">
					{PrivacyPolicyContent.descr}
                </p>
                <div className="terms-conditions__content content-terms-conditions">
                    {PrivacyPolicyData.map((item, index) => (
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
            </div>
            <div className="faq-page__decor faq-page__decor_left">
                <img src={PriceMan} alt="" />
            </div>
            <div className="faq-page__decor faq-page__decor_right">
                <img src={PriceMan} alt="" />
            </div>
        </section>
    );
}

export default PrivacyPolicyPage;