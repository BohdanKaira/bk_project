import { Link } from 'react-router-dom';
export function ContactUsButton() {
    return(
        <Link to="contact" data-da=".menu-header__list,450" type="button" className="header__button _button-border">Contact us</Link>
    )
}
export function DiscoverMore() {
    return(
        <Link to="about" type="button" className="block-price__button _button">discover more</Link>
    )
}
export function ReadMore(){
    return(
        <Link to="about" type="button" className="block-price__button _button">read more</Link>
    )
}
export function LearnMore(){
    return(
        <Link to="/service/detail-service" type="button" className="item-service__button _button-border">learn more</Link>
    )
}
export function GetStarted(){
    return(
        <Link to="service" type="button" className="video__button _button">get started</Link>
    )
}
export function GetStartedPrice(){
    return(
        <Link to="pricing-plan" type="button" className="block-price__button _button">get started</Link>
    )
}
export function SeeAll(){
    return(
        <Link to="blog" type="button" className="stay-up__button_mobile _button-border">see all</Link>
    )
}