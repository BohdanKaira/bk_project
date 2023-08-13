import VideoBlock from './../img/videos/videoBlock-video.webp'
import { VideoContent } from '../data/SectionText';
import { GetStarted } from './Buttons';
import React, { useState } from 'react';

function Video() {
    const [showVideo, setShowVideo] = useState(false);

    const handleToggleVideo = () => {
        setShowVideo(!showVideo);
    };

    return (
        <section className="page__video video">
            <div className="video__container">
                <h3 data-aos="fade-down" className="video__subtitle _subtitle">
                    {VideoContent.h3}
                </h3>
                <h2 data-aos="fade-down" className="video__title _title">
                    {VideoContent.h2}
                </h2>
                <div className="video__content">
                    <div className="video__preview preview-video">
                        <div className={`preview-video__button ${showVideo ? '' : '_icon-play-backgound'}`} onClick={handleToggleVideo}></div>
                        <div className="preview-video__image preview-video__image-ibg">
                            <img src={VideoBlock} alt="video" />
                        </div>
                        <div className="preview-video__info">
                            <h6 className="preview-video__name">{VideoContent.h6}</h6>
                            <h5 className="preview-video__title">{VideoContent.h5}</h5>
                        </div>
                        <div className="preview-video__bottom" >
                            <div className="preview-video__play _icon-fill-arrow"></div>
                            <div className="preview-video__bar">
                                <span className="preview-video__bar_time"></span><span className="preview-video__bar_load"></span>
                            </div>
                        </div>
                        {showVideo && (
                            <div className="video__frame">
                                <iframe  
                                src="https://www.youtube.com/embed/TckqNdrdbgk"  
                                frameBorder="0"
                                allowFullScreen></iframe>
                            </div>
                        )}
                    </div>
                    <GetStarted />
                </div>
            </div>
        </section>
    );
}

export default Video;
