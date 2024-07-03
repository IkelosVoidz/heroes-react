import PropTypes from 'prop-types';
import { HeroList } from '../components';

export const DcPage = () => {
	return (
		<>
			<h1>DC Comics</h1>
			<hr />

			<HeroList publisher='DC Comics'></HeroList>
		</>
	);
};

DcPage.propTypes = {};
