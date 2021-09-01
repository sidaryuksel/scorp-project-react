import React, { useState, useContext } from 'react';
import { Button } from 'reactstrap';
import ModalPage from './ModalPage';
import { UserContext } from '../context/UserContext';
import { useTranslation  } from 'react-i18next';

const Login = () => {
	const {t} = useTranslation();
	const [ user ] = useContext(UserContext);

	const [ modal, setModal ] = useState(false);
	const toggle = (e) => {
		setModal(!modal);
	};

	return (
		<div className="container margin-top">
			{user.name ? (
				<div>
					<h1>{t('hi')} <span style={{color: 'red'}}>{user.name}</span> {t('how')}</h1>
					<h3>{t('y_email')} {user.email}</h3>
					<h4>{t('l_selection')} {user.language}</h4>
					{console.log(user)}
				</div>
			) : (
				<div>
					<h1>{t('enter_info')}</h1>
					<Button color="primary text-light" onClick={toggle} style={{ marginTop: '20px' }}>
						{t('login')}
					</Button>
				</div>
			)}
			<ModalPage toggle={toggle} modal={modal} />
		</div>
	);
};

export default Login;
