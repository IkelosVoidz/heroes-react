import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { HeroesRoutes } from '../heroes';
import { LoginPage } from '../auth';
import { Navbar } from '../ui';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route
					path='/login'
					element={
						<PublicRoute>
							<LoginPage />
						</PublicRoute>
					}
				/>

				{/* <Route path='/*' element={<HeroesRoutes />}></Route> //unprotected route */}

				<Route
					path='/*'
					element={
						<PrivateRoute>
							<HeroesRoutes />
						</PrivateRoute>
					}
				/>
			</Routes>
		</>
	);
};
