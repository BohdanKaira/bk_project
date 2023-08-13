import { SeeAll } from "./Buttons";
import { SliderContent } from "../data/SectionText";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
function Carousel() {
    const [slider, SetSlider] = useState([]);
    
    useEffect(()=>{
        fetch('./pubdata/Slider.json')
            .then(resp => resp.json())
            .then(resp => {
                SetSlider(resp);
            })
    }, []);
    const sliderSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <section className="page__stay-up stay-up">
				<div className="stay-up__container">
					<div className="stay-up__top top-stay-up">
						<div data-aos="fade-right" data-aos-duration="500" className="top-stay-up__content">
							<h3 className="top-stay-up__subtitle _subtitle">{SliderContent.h3}</h3>
							<h2 className="top-stay-up__title _title">
                            {SliderContent.h2}
							</h2>
						</div>
						<SeeAll />
					</div>
					<div className="stay-up__body">
						<div data-aos="fade-right" data-aos-duration="700" data-aos-delay="200" className="stay-up__popular popular-stay-up">
							<h4 className="popular-stay-up__title">{SliderContent.h4}</h4>
                            <Slider {...sliderSettings}>
                                {slider.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <div className="popular-stay-up__image">
                                                <img src={item.img} alt="" />
                                                <div className="popular-stay-up__content">
                                                    <div className="popular-stay-up__left">
                                                        <div className="popular-stay-up__category">{item.title}</div>
                                                        <h3 className="popular-stay-up__name">
                                                            {item.descr}
                                                        </h3>
                                                    </div>
                                                    <Link to="blog" className="popular-stay-up__button _icon-arrow"></Link>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </Slider>
						</div>
					</div>
					<div className="stay-up___mobile">
						<Link to="blog" className="stay-up__button_mobile _button-border">see all</Link>
					</div>
				</div>
			</section>
    )
}
export default Carousel;