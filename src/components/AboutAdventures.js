import { useEffect, useState } from "react";
import { AdventuresContent } from "../data/SectionText";
function AboutAdventures() {
	const [adventages, setAdventages] = useState([]);

    useEffect(()=>{
        fetch('./pubdata/CardsAdventages.json')
            .then(resp => resp.json())
            .then(resp => {
                setAdventages(resp);
            })

    },[]);
    return (
		<section className="page__adventages adventages">
			<div className="adventages__container">
				<h3 className="adventages__subtitle _subtitle">{AdventuresContent.h3}</h3>
				<h2 className="adventages__title _title">
					{AdventuresContent.h2}
				</h2>	
				<div data-aos="zoom-in-up" className="adventages__body _border-gradient">
					{adventages.map((item, index)=> {
						return (
							<div className="adventages__item item-adventages" key={index}>
								<div className={item.icon}></div>
								<h5 className="item-adventages__title _item-title">{item.title}</h5>
								<p className="item-adventages__text _text">{item.descr}</p>
							</div>
						)
					}
					)}
				</div>
			</div>
		</section>
    )
}
export default AboutAdventures;