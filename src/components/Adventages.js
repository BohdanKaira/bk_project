import { useEffect, useState } from "react";

function Adventages() {
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
export default Adventages;