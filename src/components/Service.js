import { useEffect, useState } from "react";
import { ServiceContent } from "../data/SectionText";
import { LearnMore } from "./Buttons";
function Service() {
    const [services, SetServices] = useState([]);
    
    useEffect(()=>{
        fetch('./pubdata/Services.json')
            .then(resp => resp.json())
            .then(resp => {
                SetServices(resp);
            })
    }, []);
    return (
        <section className="page__service service">
				<div className="service__container">
					<div className="service__top">
						<div className="service__titles">
							<h3 data-aos="fade-right" className="service__subtitle _subtitle">
								{ServiceContent.h3}
							</h3>
							<h2 data-aos="fade-right" className="service__title _title">
                            {ServiceContent.h2}
							</h2>
						</div>
						<p data-aos="fade-left" className="service__text _text">
                            {ServiceContent.descr}
						</p>
					</div>
					<div className="service__body">
                        {services.map((item, index)=> {
                            return (
                                <div data-aos="fade-up" className="service__item _border-gradient item-service" key={index}>
                                    <div className={item.icon}></div>
                                    <h5 className="item-service__title _item-title">{item.title}</h5>
                                    <p className="item-service__text _text">{item.text}</p>
                                    <LearnMore />
                                    <div className="item-service__hover">
                                        <LearnMore />
                                    </div>
                                </div>
                            )
                        }
                        )}
					</div>
				</div>
			</section>
    )
}
export default Service;