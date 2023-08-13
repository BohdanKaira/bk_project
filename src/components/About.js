import { AboutList } from "../data/AboutComponents";
import { AboutContent } from "../data/SectionText";
import { ReadMore } from "./Buttons";
import AboutMan from './../img/decor/about-man.webp'
import VideoPlay from './../img/icons/video-play.svg'
import AboutVideo from './../img/videos/about-video.webp'

function AboutUs() {

    return (
        <section className="page__about about">
				<div className="about__container">
					<div data-aos="fade-up-right" className="about__left">
						<div className="about__image">
							<img src={AboutMan} alt="" />
						</div>
						<div className="about__video">
							<img className="about__video_play" src={VideoPlay} alt="play" />
							<img className="about__video_img" src={AboutVideo} alt="video" />
						</div>
					</div>
					<div className="about__content">
						<h3 data-aos="fade-left" className="about__subtitle _subtitle">
							{AboutContent.h3}
						</h3>
						<h2 data-aos="fade-left" className="about__title _title">
							{AboutContent.h2}
						</h2>
						<p data-aos="fade-left" className="about__text _text">
							{AboutContent.descr}
						</p>
						<ul className="about__list list-about">
                            {AboutList.map((item, index) => {
									return (
										<li data-aos="fade-up" className="list-about__item _icon-check _gradient-before" key={index}>
											{item.text}
										</li>
										)}
                            )}
						</ul>
						<ReadMore />
					</div>
				</div>
			</section>
    )
}
export default AboutUs;