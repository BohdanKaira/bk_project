import logo from './../img/icons/logo.svg'
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MainMenu } from '../data/navigations';
import { ContactUsButton } from './Buttons';
function SiteHeader() {
	const [scrollClass, setScrollClass] = useState('');
	
  	useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollClass('_header-scroll');
      } else {
        setScrollClass('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  	}, []);
	
	const toggleMenu = () => {
        document.documentElement.classList.toggle('lock');
        document.documentElement.classList.toggle('menu-open');
		
    };
	const toggleSubmenu = (event) => {
		const button = event.target;
		const sublist = button.nextElementSibling; 
		
		sublist.classList.toggle("active"); 
	};
	
    return (
        <header className={`header ${scrollClass}`}>
			<div className="header__container">
				<div className="header__logo">
					<Link to="/"><img src={logo} alt="logo" /></Link>
				</div>
				<nav className="header__menu menu-header">
					<ul className="menu-header__list" onClick={toggleMenu} hidden>
						{MainMenu.map((item, index) => {
							return (<li className="menu-header__item " key={index}><NavLink to={item.to}>{item.title}</NavLink>{
								item.children ? (<><button data-spoller="992.98,max" type="button" className="menu-header__arrow _icon-small-arrow" onClick={toggleSubmenu}></button><ul className="menu-header__sublist">
									{item.children.map((item, index)=>{
									return (<li className="menu-header__subitem" key={index}><Link to={item.to}>{item.title}</Link></li>)
								})}</ul></>) : null
							}</li>)
						})}
					</ul>	
				</nav>
				<ContactUsButton />
				<div className="icon-menu" onClick={toggleMenu}>
					<div className="header__burger">
						<span></span>
					</div>
				</div>
				
			</div>
		</header>
    )
}

export default SiteHeader;


// function SiteHeader() {
//   const [scrollClass, setScrollClass] = useState('');
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 0) {
//         setScrollClass('_header-scroll');
//       } else {
//         setScrollClass('');
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const toggleMenu = () => {
//     document.documentElement.classList.toggle('lock'); // Check if 'lock' class is defined correctly in your CSS
//     document.documentElement.classList.toggle('menu-open'); // Check if 'menu-open' class is defined correctly in your CSS
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const toggleSubmenu = (event) => {
//     const button = event.target;
//     const sublist = button.nextElementSibling;

//     sublist.classList.toggle('active');
//   };

//   const closeMobileMenu = () => {
//     if (isMobileMenuOpen) {
//       document.documentElement.classList.remove('lock'); // Check if 'lock' class is defined correctly in your CSS
//       document.documentElement.classList.remove('menu-open'); // Check if 'menu-open' class is defined correctly in your CSS
//       setIsMobileMenuOpen(true);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('click', closeMobileMenu);

//     return () => {
//       document.removeEventListener('click', closeMobileMenu);
//     };
//   }, [isMobileMenuOpen]);

//   return (
//     <header className={`header ${scrollClass}`}>
//       <div className="header__container">
//         <div className="header__logo">
//           <Link to="/">
//             <img src={logo} alt="logo" />
//           </Link>
//         </div>
//         <nav className={`header__menu menu-header ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
//           <ul className="menu-header__list" onClick={toggleMenu}>
//             {MainMenu.map((item, index) => {
//               return (
//                 <li className="menu-header__item" key={index}>
//                   <NavLink to={item.to}>{item.title}</NavLink>
//                   {item.children ? (
//                     <>
//                       <button
//                         data-spoller="992.98,max"
//                         type="button"
//                         className="menu-header__arrow _icon-small-arrow"
//                         onClick={toggleSubmenu}
//                       ></button>
//                       <ul className="menu-header__sublist">
//                         {item.children.map((item, index) => {
//                           return (
//                             <li className="menu-header__subitem" key={index}>
//                               <Link to={item.to}>{item.title}</Link>
//                             </li>
//                           );
//                         })}
//                       </ul>
//                     </>
//                   ) : null}
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>
//         <ContactUsButton />
//         <div className="icon-menu" onClick={toggleMenu}>
//           <div className="header__burger">
//             <span></span>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default SiteHeader;