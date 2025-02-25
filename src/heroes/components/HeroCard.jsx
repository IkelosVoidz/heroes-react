import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

export const HeroCard = ({
	id,
	superhero,
	publisher,
	alter_ego,
	first_appearance,
	characters,
}) => {
	const heroImageUrl = `./heroes/${id}.jpg`;

	return (
		<div className='col'>
			<div className='card'>
				<div className='row no-gutters'>
					<div className='col-md-12 col-lg-5 col-xl-5 col-xxl-6 animate__animated animate__fadeIn'>
						<img
							src={heroImageUrl}
							className='card-img'
							alt={superhero}
						/>
					</div>

					<div className='col-sm-12 col-lg-7 col-xl-7 col-xxl-6'>
						<div className='card-body'>
							<h5 className='card-title'> {superhero}</h5>
							<p className='card-text'> {alter_ego} </p>
							{alter_ego !== characters && (
								<p className='card-text'> {characters} </p>
							)}
							<p className='card-text'>
								<small className='text-muted'>
									{first_appearance}
								</small>
							</p>
							<Link to={`/hero/${id}`}>View more...</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

HeroCard.propTypes = {
	id: PropTypes.string,
	superhero: PropTypes.string,
	publisher: PropTypes.string,
	alter_ego: PropTypes.string,
	first_appearance: PropTypes.string,
	characters: PropTypes.string,
};
