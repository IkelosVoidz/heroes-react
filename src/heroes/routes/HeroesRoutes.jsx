import React from 'react';
import PropTypes from 'prop-types';

import { Navbar } from '../../ui';
import { Navigate, Route, Routes } from 'react-router-dom';
import { DcPage, HeroPage, MarvelPage, SearchPage } from '../pages';

export const HeroesRoutes = (props) => {
	return (
		<>
			<Navbar />

			<div className='container mt-2'>
				<Routes>
					<Route path='/marvel' element={<MarvelPage />}></Route>
					<Route path='/dc' element={<DcPage />}></Route>
					<Route path='/search' element={<SearchPage />}></Route>
					<Route path='/hero/:id' element={<HeroPage />}></Route>

					<Route
						path='/*'
						element={<Navigate to='/marvel' />}
					></Route>
				</Routes>
			</div>
		</>
	);
};

HeroesRoutes.propTypes = {};
