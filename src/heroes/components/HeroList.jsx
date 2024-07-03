import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { getHeroesByPublisher } from '../helpers';
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {
	const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

	return (
		<div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
			{heroes.map((hero) => (
				<HeroCard {...hero} key={hero.id}></HeroCard>
			))}
		</div>
	);
};

HeroList.propTypes = {
	publisher: PropTypes.string,
};
