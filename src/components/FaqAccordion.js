import { FAQContent } from "../data/SectionText";
import {Accordion, AccordionBody, AccordionHeader, AccordionItem} from "react-headless-accordion";
import { useState } from "react";
import FaqAccordionContent from '../data/FAQAccordionContent.json'
import PriceMan from './../img/decor/price-man.webp'
function FaqAccordion() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const filteredContent = selectedCategory === "All" ? FaqAccordionContent : FaqAccordionContent.filter(item => item.type === selectedCategory);
    return(
        <section className="page__faq faq-page">
				<div className="faq-page__body">
					<h3 data-aos="fade-down" data-aos-duration="500" data-aos-delay="200" className="faq-page__subtitle _subtitle">
						{FAQContent.h3}
					</h3>
					<h2 data-aos="fade-down" data-aos-duration="500" data-aos-delay="100" className="faq-page__title _title">
                        {FAQContent.h2}
					</h2>
					<p data-aos="fade-down" data-aos-duration="500" className="faq-page__text _text">
                        {FAQContent.descr}
					</p>
                        <div data-tabs="479.98" className="faq-page__tabs tabs-faq-page">
                            <nav data-aos="fade-down" data-aos-duration="500" data-tabs-titles classNameName="tabs-faq-page__navigation">
                                <button type="button" classNameName={`tabs-faq-page__title _button-border ${selectedCategory === "All" ? "_tab-active" : ""}`} onClick={() => setSelectedCategory("All")}>
                                    All
                                </button>
                                <button type="button" classNameName={`tabs-faq-page__title _button-border ${selectedCategory === "service" ? "_tab-active" : ""}`} onClick={() => setSelectedCategory("service")}>
                                    VR Service
                                </button>
                                <button type="button" classNameName={`tabs-faq-page__title _button-border ${selectedCategory === "price" ? "_tab-active" : ""}`} onClick={() => setSelectedCategory("price")}>
                                    Pricing
                                </button>
                            </nav>
                        <div data-spollers className="faq-page__spollers spollers-faq">
                            <Accordion transition={{duration: "600ms", timingFunction: "cubic-bezier(0, 0, 0.2, 1)"}}>
                                {filteredContent.map((item, index) => (
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
                    <div className="faq-page__decor faq-page__decor_left">
                        <img src={PriceMan} alt="" />
                    </div>
                    <div className="faq-page__decor faq-page__decor_right">
                        <img src={PriceMan} alt="" />
                    </div>
				</div>
			</section>  
    )
}
export default FaqAccordion;