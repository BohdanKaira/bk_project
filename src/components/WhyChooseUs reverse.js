import ChooseMan from './../img/decor/choose-man2.webp'
import VideoPlay from './../img/icons/video-play.svg'
import ChooseVideo from './../img/videos/choose-video.webp'
import { WhyChooseUsContent } from '../data/SectionText';
import {Accordion, AccordionBody, AccordionHeader, AccordionItem} from "react-headless-accordion";
import { AccordionText } from '../data/Accordion';
function WhyChooseUsReverse(){

    return(
        <section className="page__choose choose">
            <div className="choose__container choose__container_reverse">
                <div data-aos="fade-left" className="choose__right">
                    <div className="choose__image">
                        <img src={ChooseMan} alt="" />
                    </div>
                    <div className="choose__video">
                        <img className="choose__video_play" src={VideoPlay} alt="play" />
                        <img className="choose__video_img" src={ChooseVideo} alt="video" />
                    </div>
                </div>
                <div className="choose__content content-choose">
                    <h3 data-aos="fade-right" className="content-choose__subtitle _subtitle">
                        {WhyChooseUsContent.h3}
                    </h3>
                    <h2 data-aos="fade-right" className="content-choose__title _title">
                        {WhyChooseUsContent.h2}
                    </h2>
                    <div data-spollers className="content-choose__spollers spollers-choose">
                    <Accordion>
                        {AccordionText.map((item, index) => (
                            <AccordionItem key={index}>
                                {({open}) => (
                                    <div data-aos="fade-up" className="spollers-choose__item">
                                        <AccordionHeader>
                                            <div className={`spollers-choose__title _icon-small-arrow ${open ? 'accordion-active' : ''}`}>{item.title}</div>
                                        </AccordionHeader>

                                        <AccordionBody>
                                            <div className="spollers-choose__body _text">
                                                {item.content}
                                            </div>
                                        </AccordionBody>
                                    </div>
                                )}
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
                </div>
            </div>
        </section>
        
    )
}
export default WhyChooseUsReverse;