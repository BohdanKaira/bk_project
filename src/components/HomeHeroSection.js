import first from '../img/clients/01.webp';
import second from '../img/clients/02.webp';
import third from '../img/clients/03.webp';
import underline from '../img/decor/underline.svg';
import videoPlay from '../img/icons/video-play.svg';
import heroVideo from '../img/videos/hero-video.webp';
import heroMan from '../img/decor/hero-man.webp';
import { DiscoverMore } from './Buttons';

function HomeHeroSection() {
    return (
        <section className="page__hero hero">
            <div className="hero__container">
                <div className="hero__body">
                    <h1 data-aos="fade-up" className="hero__title">
                        Immerse Yourself in Virtual Reality
                    </h1>
                    <p data-aos="fade-up" className="hero__text _text">
                        Experience Unforgettable Events in VR. Bring your events to life
                        like never before with our VR services
                    </p>
                    <DiscoverMore />
                    <div className="hero__bottom">
                        <div data-aos="fade-up" className="hero__client client-hero">
                            <div className="client-hero__images">
                                <div className="client-hero__img">
                                    <img src={first} alt="client" />
                                </div>
                                <div className="client-hero__img">
                                    <img src={second} alt="client" />
                                </div>
                                <div className="client-hero__img">
                                    <img src={third} alt="client" />
                                </div>
                            </div>
                            <p className="client-hero__text">
                                <span className="client-hero__text_decor">
                                    32k+
                                    <img src={underline} alt="underline" />
                                </span>
                                Happy Client
                            </p>
                        </div>
                        <div data-aos="zoom-in" className="hero__video">
                            <img className="hero__video_play" src={videoPlay} alt="play" />
                            <img className="hero__video_img" src={heroVideo} alt="video" />
                        </div>
                    </div>
                </div>
                <div className="hero__decor">
                    <div data-aos="fade-left" className="hero__img">
                        <img src={heroMan} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HomeHeroSection;