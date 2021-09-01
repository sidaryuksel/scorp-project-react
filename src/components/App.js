import React from 'react';
import NavBar from './navbar/NavBar';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Contact from './pages/Contact';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import history from '../history';
import '../style.css';
import Footer from './pages/Footer';
import { UserProvider } from './context/UserContext';
import { PageProvider } from './context/PageContext';
import ModalPage from './pages/ModalPage';

const App = () => {
	return (
		<div>
			<UserProvider>
			<PageProvider>
				<Router history={history}>
					<NavBar />
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/contact"  component={Contact} />
						<Route path="/login/modal" component={ModalPage} />
					</Switch>
				</Router>
				<Footer />
				</PageProvider>
			</UserProvider>
		</div>
	);
};

export default App;
