import React, { createContext, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const PageContext = createContext();

export const PageProvider = props => {
    const {t} = useTranslation();
	const [ page, setPage ] = useState(t('home'));


	return <PageContext.Provider value={[page, setPage]}>{props.children}</PageContext.Provider>;
};
