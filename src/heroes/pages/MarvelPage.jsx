import PropTypes from 'prop-types';
import { HeroList } from '../components/';

export const MarvelPage = () => {
	return (
		<>
			<h1>Marvel Comics</h1>
			<hr />
			<HeroList publisher='Marvel Comics'></HeroList>
		</>
	);
};

MarvelPage.propTypes = {};
