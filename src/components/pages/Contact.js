import React, { useContext, useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { UserContext } from '../context/UserContext';
import { useTranslation  } from 'react-i18next';
import { PageContext } from '../context/PageContext';
import i18n from '../translations/i18n';

const Contact = (props) => {
    const [user, setUser] = useContext(UserContext);
    const [setPage] = useContext(PageContext);
    const {t} = useTranslation();
    const [phone, setPhone] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('Turkey');
    const [text, setText] = useState('');
    const [toggle, setToggle] = useState(false);

	const countryList = [
		{ id: 'TR', name: 'Turkey' },
		{ id: 'US', name: 'United States of America' },
		{ id: 'GB', name: 'United Kingdom' },
		{ id: 'DE', name: 'Germany' },
		{ id: 'SE', name: 'Sweden' },
		{ id: 'KE', name: 'Kenya' },
		{ id: 'BR', name: 'Brazil' },
		{ id: 'ZW', name: 'Zimbabwe' }
	];

    const changeLanguage = (lan) => {
        i18n.changeLanguage(lan);
    }
	useEffect(() => {
		const userData = window.localStorage.getItem('user');
        setUser(JSON.parse(userData));
        setName(user.name);
        setEmail(user.email);
        changeLanguage(user.language);
	},[user.name, user.email, setUser,user.language, setPage]);


    const submitUser = (e) => {
        e.preventDefault();
        const countryCode = countryList.find((item) => item.name === country).id;
        const contactInfo = {name: name, email: email, phonenumber: phone, country_code: countryCode, text: text};
        const objJSON = JSON.stringify(contactInfo);
        console.log(objJSON);
        setToggle(true);
    }

	return (
        <div className="container">
            {!toggle ?
		<Form onSubmit={(e) => submitUser(e)}>
			<FormGroup>
				<Label for="userName">{t('full')}</Label>
				<Input type="name" name="name" id="userName" value={name} onChange={(e) => setName(e.target.value)}/>
			</FormGroup>
			<FormGroup>
				<Label for="userEmail">{t('email')}</Label>
				<Input type="email" name="email" id="userEmail" value={email} onChange={(e) => setEmail(e.target.value)} />
			</FormGroup>
			<FormGroup>
				<Label for="examplePhone">{t('phone')}</Label>
				<Input type="phone" name="phone" id="examplePhone" onChange={(e) => setPhone(e.target.key)} />
			</FormGroup>
			<FormGroup>
				<Label for="exampleSelect">{t('select_country')}</Label>
				<Input type="select" name="select" id="exampleSelect" onChange={(e) => setCountry(e.target.value)}>
					{countryList.map((country) => <option key={country.id}>{country.name}</option>)}
				</Input>
			</FormGroup>
			<FormGroup>
				<Label for="exampleText">{t('help')}</Label>
				<Input type="textarea" name="text" id="exampleText" onSelect={(e) => setText(e.target.value)} />
			</FormGroup>
			<Button>{t('send')}</Button>
		</Form>
         :
         <h6>{t('thank_you')}</h6>
         }
        </div>
	);
};

export default Contact;
