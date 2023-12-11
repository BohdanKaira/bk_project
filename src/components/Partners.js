import CompanyMan from './../img/decor/companiesMan.webp'
import { useEffect, useState } from "react";
function Partners() {
    const [partners, SetPartners] = useState([]);
    
    useEffect(()=>{
        fetch('./pubdata/Partners.json')
            .then(resp => resp.json())
            .then(resp => {
                SetPartners(resp);
            })
    }, []);
    return (
        <section className="page__companies companies">
				<div className="companies__container">
					<h3 data-aos="fade-up" className="companies__subtitle _subtitle">
						Our Trusted Partners
					</h3>
					<h2 data-aos="fade-up" className="companies__title _title">
						Discover the Companies We Work With
					</h2>
					<div data-aos="zoom-in-up" className="companies__body">
						<div className="companies__image">
							<img src={CompanyMan} alt="" />
						</div>
						<div className="companies__slider swiper">
                            {partners.map((item, index)=> {
                                return (
							        <div className="companies__wrapper swiper-wrapper" key={index}>
                                        <div className={item.class}>
                                            <img src={item.img} alt="123" />
                                        </div>
							        </div>
                                )
                            }
                            )}    	
						</div>
					</div>
                    {/* <div className="companies__controls">
                        <button type="button" className="companies__button companies__button_prev _icon-arrow"></button>
                        <button type="button" className="companies__button companies__button_next _icon-arrow"></button>
					</div> */}
				</div>
			</section>
    )
}
export default Partners;