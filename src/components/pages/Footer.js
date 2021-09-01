import React from 'react';
import { useTranslation  } from 'react-i18next';

const Footer = () => {
	const {t} = useTranslation();

	return (
		<div className="container footer-style">
            <h4>{t('footer')}</h4>
			{t('footer_p')}
		</div>
	);
};

export default Footer;
