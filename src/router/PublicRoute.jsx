import React, { useContext } from 'react';
import { AuthContext } from '../auth/context/AuthContext';

export const PublicRoute = ({ children }) => {
	const { logged } = useContext(AuthContext);

	return logged ? <Navigate to='/' /> : children;
};

import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

PublicRoute.propTypes = {
	children: PropTypes.object,
};
