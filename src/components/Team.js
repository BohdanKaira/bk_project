import { useEffect, useState } from "react";
import { TeamContent } from "../data/SectionText";
function Team() {
    const [team, SetTeam] = useState([]);
    
    useEffect(()=>{
        fetch('./pubdata/Team.json')
            .then(resp => resp.json())
            .then(resp => {
                SetTeam(resp);
            })
    }, []);
    return(
        <section className="page__team team-page">
				<div className="team-page__container">
					<h3 className="team-page__subtitle _subtitle">{TeamContent.h3}</h3>
					<h2 className="team-page__title _title">{TeamContent.h2}</h2>
					<div className="team-page__body">
                        {team.map((item, index)=> {
                            return (
                                <div key={index} data-aos="fade-up" data-aos-duration="500" className="team-page__item item-team-page _border-gradient">
                                    <div className="item-team-page__image">
                                        <img src={item.img} alt="worker" />
                                    </div>
                                    <div className="item-team-page__content">
                                        <ul className="item-team-page__links">
                                            <li className="item-team-page__link">
                                                <a href="https://www.instagram.com" rel="noreferrer nofollow" target="_blank" className="_icon-instagram" />
                                            </li>
                                            <li className="item-team-page__link">
                                                <a href="https://www.facebook.com" rel="noreferrer nofollow" target="_blank" className="_icon-facebook" />
                                            </li>
                                            <li className="item-team-page__link">
                                                <a href="https://twitter.com" rel="noreferrer nofollow" target="_blank" className="_icon-twitter" />
                                            </li>
                                        </ul>
                                        <h6 className="item-team-page__name">{item.name}</h6>
                                        <p className="item-team-page__post">{item.position}</p>
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
export default Team;