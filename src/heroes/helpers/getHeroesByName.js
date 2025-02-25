import { heroes } from '../data/heroes';

export const getHeroesByName = (name = '') => {
	name = name.toLocaleLowerCase().trim();

	if (name.length === 0) return [];
	console.log(name);

	return heroes.filter((hero) =>
		hero.superhero.toLocaleLowerCase().includes(name),
	);
};
