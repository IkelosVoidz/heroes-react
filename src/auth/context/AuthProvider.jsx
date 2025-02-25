import React, { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import PropTypes from 'prop-types';

import { authReducer } from './authReducer';
import { types } from '../types/types';

// const initialState = {
// 	logged: false,
// };

const init = () => {
	const user = JSON.parse(localStorage.getItem('user'));
	return {
		logged: !!user,
		user,
	};
};

export const AuthProvider = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, {}, init);

	const login = (name = '') => {
		const user = { id: 'ABC', name };

		const action = { type: types.login, payload: user };

		localStorage.setItem('user', JSON.stringify(user));

		dispatch(action);
	};

	const logout = () => {
		localStorage.removeItem('user');
		dispatch({
			type: types.logout,
		});
	};

	return (
		<AuthContext.Provider value={{ ...state, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.object,
};
