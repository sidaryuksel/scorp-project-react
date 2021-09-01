import React, { useContext, useEffect, useState } from 'react';
import { FcHome } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PageContext } from '../context/PageContext';

const NavBar = (props) => {
	const [ page, setPage ] = useContext(PageContext);
	const [ isMobile, setIsMobile ] = useState(false);
	const { t } = useTranslation();

	const pageSetting = (e) => {
		setPage(e.target.text);
	};
	useEffect(() => {
		window.localStorage.setItem('page', JSON.stringify(page));
	});

	return (
		<nav className="navbar shadow">
			<h3 className="logo">
				<Link to="/">
					<FcHome className="icon-margin" />
					{t('logo')}
				</Link>
			</h3>
			<ul className={isMobile ? 'nav-links-mobile' : 'nav-links'} onClick={() => setIsMobile(false)}>
				<Link to="/" onClick={(e) => pageSetting(e)} className="home">
					<li>{t('home')}</li>
				</Link>
				<Link to="/login" onClick={(e) => pageSetting(e)} className="login">
					<li>{t('login')}</li>
				</Link>
				<Link to="/contact" onClick={(e) => pageSetting(e)} className="contact">
					<li>{t('contact')}</li>
				</Link>
			</ul>
			<button className="mobile-menu-icon"  onClick={() => setIsMobile(!isMobile)}>
				{isMobile ? <i className="fas fa-times" /> : <i className="fas fa-bars" />}
			</button>
		</nav>
	);
};

export default NavBar;
