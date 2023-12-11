import PriceMan from './../img/decor/price-man.webp'
import { PricingContent, PricingCardContent } from '../data/SectionText';
import { GetStartedPrice } from './Buttons';
import { useEffect, useState } from "react";
function OurPricing() {
    const [pricing, SetPricing] = useState([]);
    
    useEffect(()=>{
        fetch('./pubdata/Pricing.json')
            .then(resp => resp.json())
            .then(resp => {
                SetPricing(resp);
            })
    }, []);
    return(
        <section className="page__price price">
				<div className="price__container">
					<h3 data-aos="fade-right" className="price__subtitle _subtitle">
						{PricingContent.h3}
					</h3>
					<h2 data-aos="fade-right" className="price__title _title">
                         {PricingContent.h2} 
					</h2>
					<p data-aos="fade-right" className="price__text _text">
                        {PricingContent.descr}
					</p>
					<div data-aos="zoom-in-up" className="price__body _border-gradient">
						<div className="price__for for-price">
                            {pricing.map((item, index)=> {
                            return (
                                <div className="for-price__item" key={index}>
                                    <div className="for-price__image">
                                        <img src={item.icon} alt="cloud" />
                                    </div>
                                    <div className="for-price__body">
                                        <h5 className="for-price__title _item-title">
                                            {item.title}
                                        </h5>
                                        <p className="for-price__text _text">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                                )
                            }
                            )}
						</div>
						<div className="price__right">
							<div className="price__image">
								<img src={PriceMan} alt="" />
							</div>
							<div data-aos="fade-up" className="price__block block-price">
								<h6 className="block-price__subtitle">{PricingCardContent.h6}</h6>
								<h4 className="block-price__title">{PricingCardContent.h4}</h4>
								<GetStartedPrice />
								<p className="block-price__text">{PricingCardContent.text}</p>
							</div>
						</div>
					</div>
				</div>
			</section>
    )
}
export default OurPricing;