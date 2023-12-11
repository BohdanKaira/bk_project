import { FAQContent } from "../data/SectionText";
import {Accordion, AccordionBody, AccordionHeader, AccordionItem} from "react-headless-accordion";

import FaqAccordionContent from '../data/FAQAccordionContent.json'
function FaqAccordionSmall() {

    return(
        <section className="page__faq faq">
				<div className="faq__container">
					<h3 data-aos="fade-down" data-aos-duration="500" data-aos-delay="200" className="faq__subtitle _subtitle">
						{FAQContent.h3}
					</h3>
					<h2 data-aos="fade-down" data-aos-duration="500" data-aos-delay="100" className="faq__title _title">
                        {FAQContent.h2}
					</h2>
					<p data-aos="fade-down" data-aos-duration="500" className="faq__text _text">
                        {FAQContent.descr}
					</p>
					<div data-spollers className="faq__spollers spollers-faq">
                    <Accordion transition={{duration: "600ms", timingFunction: "cubic-bezier(0, 0, 0.2, 1)"}}>
                        {FaqAccordionContent.slice(0,5).map((item, index) => (
                            <AccordionItem key={index}>
                                {({open}) => (
                                    <div data-aos="fade-up" className="spollers-faq__item _border-gradient">
                                        <AccordionHeader>
                                            <div className={`spollers-faq__title _icon-small-arrow ${open ? 'accordion-active' : ''}`}>{item.title}</div>
                                        </AccordionHeader>

                                        <AccordionBody>
                                            <div className="spollers-faq__body _text">
                                                {item.text}
                                            </div>
                                        </AccordionBody>
                                    </div>
                                )}
                            </AccordionItem>
                        ))}
                    </Accordion>
					</div>
				</div>
			</section>  
    )
}
export default FaqAccordionSmall;