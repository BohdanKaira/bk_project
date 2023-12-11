import { useEffect, useState } from "react";
function ContactInfo() {
    const [cards, SetCards] = useState([]);
    
    useEffect(()=>{
        fetch('./pubdata/ContactInfo.json')
            .then(resp => resp.json())
            .then(resp => {
                SetCards(resp);
            })
    }, []);
    return (
        <section className="page__info info">
				<div className="info__container">
                    {cards.map((item, index)=> {
                        return (
                            <div key={index} data-aos="fade-up" data-aos-duration="500" className="info__item _border-gradient">
                                <div className="info__image">
                                    <img src={item.image} alt="" />
                                </div>
                                <h3 className="info__subtitle _subtitle">{item.title}</h3>
                                <h2 className="info__title _item-title">{item.content}</h2>
                            </div>
                        )}
                    )}
                </div>
			</section>
    )
}
export default ContactInfo;