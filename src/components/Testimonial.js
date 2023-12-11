import Review from './../img/decor/reviews.webp'
import { TestimonialContent } from '../data/SectionText';
import { useState, useEffect } from 'react';
function Testimonial() {
	const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };
	const [testimonial, SetTestimonial] = useState([]);
    
	useEffect(()=>{
		  fetch('./pubdata/Testimonial.json')
			  .then(resp => resp.json())
			  .then(resp => {
				  SetTestimonial(resp);
			  })
	}, []);
    return (

        <section data-aos="zoom-in-up" data-aos-delay="300" className="page__reviews reviews">
				<div className="reviews__container">
					<div className="reviews__top">
						<h3 className="reviews__subtitle _subtitle">{TestimonialContent.h3}</h3>
						<h2 className="reviews__title _title">{TestimonialContent.h2}</h2>
					</div>
					<div className="reviews__image">
						<img src={Review} alt="213" />
					</div>
					{testimonial.map((item, index) => {
					return (
					<div key={index}>
						<div  className={`${item.class} ${openIndex === index ? 'item-reviews_active' : ''}`}>
							<button type="button" className="item-reviews__button" onClick={() => handleClick(index)}>
								<img src={item.img} alt="client" />
							</button>
							<div className="item-reviews__content">
								<p className="item-reviews__text _text">
									{item.text}
								</p>
								<p className="item-reviews__name">
									<span>{item.name}</span>{item.position}
								</p>
							</div> 
						</div>
					</div>)
					})}
				</div>
			</section>
    )
}
export default Testimonial;
