import PriceMan from './../img/decor/price-man.webp'
import VideoPlay from './../img/icons/video-play.svg'
import HeroVideo from './../img/videos/hero-video.webp'
import { AboutInfoContent } from '../data/SectionText'
function AboutPageInfo() {

    return(
        <section className="page__about about-page">
				<div className="about-page__container">
					<div className="about-page__content content-about-page">
						<h3 data-aos="fade-right" className="content-about-page__subtitle _subtitle">
							{AboutInfoContent.h3}
						</h3>
						<h2 data-aos="fade-right" className="content-about-page__title _title">
                            {AboutInfoContent.h2}
						</h2>
						<p className="content-about-page__text _text">
                            {AboutInfoContent.text}
						</p>
					</div>
					<div data-aos="fade-left" className="about-page__right">
						<div className="about-page__image">
							<img src={PriceMan} alt="" />
						</div>
						<div className="about-page__video">
							<img className="about-page__video_play" src={VideoPlay} alt="play" />
							<img className="about-page__video_img" src={HeroVideo} alt="video" />
						</div>
					</div>
				</div>
			</section>
    )
}
export default AboutPageInfo;