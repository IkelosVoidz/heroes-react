import PropTypes from 'prop-types';
import { HeroCard } from '../components';
import { useForm } from '../../hooks/';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const { q = '' } = queryString.parse(location.search);

	const heroes = getHeroesByName(q);
	console.log({ heroes });

	const { searchText, onInputChange } = useForm({
		searchText: q,
	});

	const onSearchSubmit = (event) => {
		event.preventDefault();

		//if (searchText.trim().length <= 1) return;

		navigate(`?q=${searchText}`);

		//console.log({ searchText });
	};

	return (
		<>
			<h1>Search</h1>
			<hr />

			<div className='row'>
				<div className='col-12 col-md-5 mb-2'>
					<h4>Searching</h4>
					<hr />
					<form onSubmit={onSearchSubmit}>
						<input
							type='text'
							placeholder='Search a hero'
							className='form-control'
							name='searchText'
							autoComplete='off'
							value={searchText}
							onChange={onInputChange}
						/>
						<button className='btn btn-outline-primary mt-2'>
							Search
						</button>
					</form>
				</div>
				<div className='col-12 col-md-7'>
					<h4>Results</h4>
					<hr />

						{/* //TODO: make this more readable */}
						{
							(q === '') ? <div className='alert alert-primary animate__animated animate__fadeIn'> Search a Hero</div> : (heroes.length === 0) &&
							<div className='alert alert-danger animate__animated animate__fadeIn'> No results match : <b>{q}</b> </div>
						}
		
					<div className={`row ${heroes.length >= 2 ? 'row-cols-sm-2 row-cols-1' : 'row-cols-1'}`}>			
						{heroes.map((hero) => (
							<HeroCard key={hero.id} {...hero}></HeroCard>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

SearchPage.propTypes = {};
