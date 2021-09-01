import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import { useTranslation } from 'react-i18next';
import i18n from '../translations/i18n';

const HomePage = () => {
	const { t } = useTranslation();
	const [ user, setUser ] = useContext(UserContext);

	const changeLanguage = (lan) => {
		i18n.changeLanguage(lan);
	};

	useEffect(
		() => {
			const userData = window.localStorage.getItem('user');
			setUser(JSON.parse(userData));
			return () => {
				if(user) {
					changeLanguage(user.language);
				}
			}
		},
		[]
	);

	console.log(user);
	return (
		<div className="container margin-top">
			<h3>
				<span style={{ color: 'green' }}>{user ? user.name : ''}</span> {t('home_enterance')}
			</h3>
			<p>{t('home_paragraph')}</p>
		</div>
	);
};

export default HomePage;
