import React, { useContext, useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { UserContext } from '../context/UserContext';
import { useTranslation  } from 'react-i18next';
import i18n from '../translations/i18n';

const ModalPage = (props) => {
	const {t} = useTranslation();

	const {modal, toggle} = props;
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [language, setLanguage] = useState('EN');
	const [user, setUser] = useContext(UserContext);

	const inputName = (e) => {
		setName(e.target.value);
	};
	const inputEmail = (e) => {
		setEmail(e.target.value);
	};
	const inputPassword = (e) => {
		setPassword(e.target.value);
	}
	const inputLan = (e) => {
		setLanguage(e.target.value);
	};

	const changeLanguage = (lan) => {
		i18n.changeLanguage(lan);
	}
	const submitUser = (e) => {
		e.preventDefault();
		if(!name || !password || !email.includes('@')){
			return <div>Please enter missing infos!</div>
		}
		console.log(name, email, password, language);
		setUser({name: name, email: email, password: password, language: language});
		changeLanguage(language);
		console.log(language);
		toggle();
	}

	useEffect(() => {
		window.localStorage.setItem('user', JSON.stringify(user));
	});

	return (
		<div className="container center">
			<Modal isOpen={modal} fade={false} toggle={toggle} className="ui container">
				<ModalHeader toggle={toggle}>
					<i className="fad fa-chevron-circle-left" />
					{t('enter_info2')}
				</ModalHeader>

				<ModalBody>
					<div className="ui container">
						<label>{t('full')} </label>
						<input style={{ marginLeft: '3rem' }} type="text" value={name} onChange={inputName} />
						{name ? null :
						<span style={{fontSize: '10px', color: 'red'}}>{t('enter_name')}</span>
						}
					</div>
					<div className="ui container">
						<label>{t('email')} </label>
						<input style={{ marginLeft: '5.1rem' }} type="email" value={email} onChange={inputEmail} />
						{email.includes('@') ? null :
						<span style={{fontSize: '10px', color: 'red'}}>{t('enter_email')}</span>
						}
					</div>
					<div className="ui container">
						<label>{t('pass')} </label>
						<input
							style={{ marginLeft: '3.3rem' }}
							type="password"
							value={password}
							onChange={inputPassword}
						/>
						{password ? null :
						<span style={{fontSize: '10px', color: 'red'}}>{t('enter_password')}</span>
						}
					</div>
					<div className="ui container">
						<label>{t('language')} </label>
						<select style={{ marginLeft: '3.15rem' }} name="language" id="language" onChange={inputLan}>
						<option value="EN">EN</option>
						<option value="TR">TR</option>
						</select>
					</div>
				</ModalBody>
				<ModalFooter>
					<Button color="primary text-light" onClick={submitUser}>
						{t('submit')}
					</Button>{' '}
					<Button color="secondary" onClick={toggle}>
						{t('cancel')}
					</Button>
				</ModalFooter>

			</Modal>
		</div>
	);
};

export default ModalPage;
