import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './localization/translationEN.json';
import translationTR from './localization/translationTR.json';

//the translations
const resources = {
	EN: {
		translation: translationEN
	},
	TR: {
		translation: translationTR
	}
};

i18n
	.use(initReactI18next) //passes i18n down to react-i18next
	.init({
		resources,
		lng: 'EN',

		keySeparator: false, //we do not use keys in form message.welcome

		interpolation: {
			escapeValue: false //react already safes from xss
		}
	});

export default i18n;