import { Link } from 'react-router-dom';
import ServiceEllipce from './../img/decor/service-ellipse.webp'
import { useState, useEffect } from 'react';
function OneService() {
    const [Oneservice, SetService] = useState({});
    
    useEffect(()=>{
        fetch('./../pubdata/OneServiceData.json')
            .then(resp => resp.json())
            .then(resp => {
                SetService(resp);
            })
    }, []);
    
    return (
        <section className="page__service service-page">
				<div className="service-page__container">

					<div data-aos="zoom-in-up" className="service-page__body">
						<div className="service-page__image">
							<img src={ServiceEllipce} alt="" />
						</div>
						<div className="service-page__slider swiper">
                            {Oneservice.services && Oneservice.services.map((item, index)=> {
                                return (
                                    <div key={index} className="service-page__wrapper swiper-wrapper">
								        <div className={item.class}>
									        {item.title}
								        </div>
                                    </div>
                                )}
                            )}
							<div className="service-page__controls">
								<button type="button" className="service-page__button service-page__button_prev _icon-arrow"></button>
								<button type="button" className="service-page__button service-page__button_next _icon-arrow"></button>
							</div>
						</div>
						<div className="service-page__content content-service">
							<h3 className="content-service__subtitle _subtitle">{Oneservice.h3}</h3>
							<h2 className="content-service__title _title">{Oneservice.h2}</h2>
							<p className="content-service__text _text">{Oneservice.p1}</p>
							<p className="content-service__text _text">{Oneservice.p2}</p>
							<div className="content-service__body _border-gradient">
								<h6 className="content-service__include">{Oneservice.h6}</h6>
                                <ul  className="content-service__list">
                                {Oneservice.list && Oneservice.list.map((item, index)=> {
                                return (
                                    <li key={index} className="content-service__item _icon-check _gradient-before">{item.li}</li>
                                    )}
                                )}
                                </ul>
								{/* <ul className="content-service__list">
									<li className="content-service__item _icon-check _gradient-before">Concept development and ideation</li>
									<li className="content-service__item _icon-check _gradient-before">Storyboarding and scriptwriting</li>
									<li className="content-service__item _icon-check _gradient-before">3D modeling and animation</li>
									<li className="content-service__item _icon-check _gradient-before">User interface design and development</li>
									<li className="content-service__item _icon-check _gradient-before">Sound design and effects</li>
									<li className="content-service__item _icon-check _gradient-before">Quality assurance testing and optimization</li>
								</ul> */}
							</div>
							<p className="content-service__text _text">{Oneservice.p3}</p>
							<p className="content-service__text _text">{Oneservice.p4}</p>
					        <Link to="/contact" className="content-service__button _button">Contact us</Link>
						</div>
					</div>
				</div>
			</section>
    )
}
export default OneService;