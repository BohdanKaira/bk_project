import { PriceCardsContent } from "../data/SectionText";
import { useEffect, useState } from "react";
function PriceCards() {
	const [cards, SetCards] = useState([]);
    
    useEffect(()=>{
        fetch('./pubdata/PricingCards.json')
            .then(resp => resp.json())
            .then(resp => {
                SetCards(resp);
            })
    }, []);
    return (
        <section className="page__plan plan">
				<div className="plan__container">
					<h3 className="plan__subtitle _subtitle">{PriceCardsContent.h3}</h3>
					<h2 className="plan__title _title">{PriceCardsContent.h2}</h2>
					<p className="plan__text _text">
						{PriceCardsContent.descr}
					</p>
					<div className="plan__body">
						{cards.map((item, index)=> {
                            return (
								<div key={index} data-aos="fade-up" data-aos-duration="500" className="plan__item item-plan">
									<p className="item-plan__name">{item.PlanName}</p>
									<h5 className="item-plan__price">{item.Price} <span>{item.Span}</span></h5>
									<p className="item-plan__text _text">
										{item.Text}
									</p>
									<ul className="item-plan__list">
										<li className="item-plan__item _icon-check-circle">
											{item.Advantage1}
										</li>
										<li className="item-plan__item _icon-check-circle">
											{item.Advantage2}
										</li>
										<li className="item-plan__item _icon-check-circle">
											{item.Advantage3}
										</li>
										<li className="item-plan__item _icon-check-circle">
											{item.Advantage4}
										</li>
									</ul>
									<button type="button" className="item-plan__button _button-border">
										Get 14 Days Free Trial
									</button>
								</div>
								)
							}
						)}
					</div>
				</div>
			</section>
    )
}
export default PriceCards;