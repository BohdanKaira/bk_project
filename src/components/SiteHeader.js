import logo from './../img/icons/logo.svg'
import { Link, NavLink } from 'react-router-dom';
import { MainMenu } from '../data/navigations';
import { ContactUsButton } from './Buttons';
import { slide as Menu } from 'react-burger-menu'
function SiteHeader() {
	const styles = {
		bmBurgerButton: {
			position: 'relative',
			width: '40px',
			height: '40px'
			// display: 'none'
		},
		bmBurgerBars: {
		  background: 'linear-gradient(90deg, #0cbaf1 0%, #e95ce9 100%)',
		  width: '100%',
		  
		},
		bmBurgerBarsHover: {
		  background: '#a90000'
		},
		
		bmMenuWrap: {
		  position: 'fixed',
		  height: '100%',
		  width: '100%'
		},
		bmMenu: {
		  background: '#373a47',
		  padding: '2.5em 1.5em 0',
		  fontSize: '1.15em'
		},
		bmMorphShape: {
		  fill: '#373a47'
		},
		bmItemList: {
		  color: '#b8b7ad',
		  padding: '0.8em'
		},
		bmItem: {
		  display: 'inline-block'
		},
		bmOverlay: {
		  background: 'rgba(0, 0, 0, 0.3)',
		  width: '100%',
		  height: '100%'
		}
	  }
	  
    return (
        <header className="header">
			<div className="header__container">
				<div className="header__logo">
					<Link to="/"><img src={logo} alt="logo" /></Link>
				</div>
				<nav className="header__menu menu-header">
					<ul className="menu-header__list" hidden>
						{MainMenu.map((item, index) => {
							return (<li className="menu-header__item " key={index}><NavLink to={item.to}>{item.title}</NavLink>{
								item.children ? (<><button data-spoller="992.98,max" type="button" className="menu-header__arrow _icon-small-arrow"></button><ul className="menu-header__sublist">
									{item.children.map((item, index)=>{
									return (<li className="menu-header__subitem" key={index}><Link to={item.to}>{item.title}</Link></li>)
								})}</ul></>) : null
							}</li>)
						})}
					</ul>	
				</nav>
				<ContactUsButton />
				
				<Menu  right styles={styles}  >
					{MainMenu.map((item, index) => {
						return (<li className="menu-header__item " key={index}><NavLink to={item.to}>{item.title}</NavLink>{
						item.children ? (<><button data-spoller="992.98,max" type="button" className="menu-header__arrow _icon-small-arrow"></button><ul className="menu-header__sublist">
							{item.children.map((item, index)=>{
							return (<li className="menu-header__subitem" key={index}><Link to={item.to}>{item.title}</Link></li>)
						})}</ul></>) : null
						}</li>)
					})}
				</Menu>
			</div>
		</header>
    )
}

export default SiteHeader;