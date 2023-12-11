import { Link } from "react-router-dom";
import { AboutTeamContent } from "../data/SectionText";
import { useEffect, useState } from "react";
function AboutTeam() {
    const [team, SetTeam] = useState([]);
    
    useEffect(()=>{
        fetch('./pubdata/Team.json')
            .then(resp => resp.json())
            .then(resp => {
                SetTeam(resp);
            })
    }, []);
    return (
        <section className="page__team team">
				<div className="team__container">
					<div className="team__top">
						<div data-aos="fade-right" data-aos-duration="500" className="team__left">
							<h3 className="team__subtitle _subtitle">{AboutTeamContent.h3}</h3>
							<h2 className="team__title _title">{AboutTeamContent.h2}</h2>
						</div>
						<Link to="/team" className="team__button _button-border">see all</Link>
					</div>
                    <div className="team__body">
                        {team.slice(0, 4).map((item, index)=> {
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
					<div className="team__mobile">
						<Link to="team" className="team__button_mobile _button-border">see all</Link>
					</div>
				</div>
			</section>
    )
}
export default AboutTeam;