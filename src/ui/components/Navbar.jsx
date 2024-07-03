import { useContext } from 'react';
import { Link, NavLink, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth';

export const Navbar = () => {
	const navigate = useNavigate();

	const { user, logout } = useContext(AuthContext);

	const onLogout = () => {
		logout();

		navigate('/login', {
			replace: true,
		});
	};

	return (
		<nav className='navbar navbar-expand-sm navbar-dark bg-dark p-2'>
			<Link className='navbar-brand' to='/'>
				<img src='/react.svg' alt='ReactIco' />
			</Link>

			<div className='navbar-collapse'>
				<div className='navbar-nav'>
					<NavLink
						className={({ isActive }) =>
							`nav-item nav-link ${isActive ? 'active' : ''} `
						}
						to='/marvel'
					>
						Marvel
					</NavLink>

					<NavLink
						className={({ isActive }) =>
							`nav-item nav-link ${isActive ? 'active' : ''} `
						}
						to='/dc'
					>
						DC
					</NavLink>

					<NavLink
						className={({ isActive }) =>
							`nav-item nav-link ${isActive ? 'active' : ''} `
						}
						to='/Search'
					>
						Search
					</NavLink>
				</div>
			</div>

			<div className='navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end'>
				<ul className='navbar-nav ml-auto'>
					<span className='nav-item nav-link text-primary'>
						{user?.name}
					</span>

					<button
						onClick={onLogout}
						className='nav-item nav-link btn'
					>
						Logout
					</button>
				</ul>
			</div>
		</nav>
	);
};
