import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';
import { useContext } from 'react';
import { useForm } from '../../hooks';

export const LoginPage = () => {
	const { login } = useContext(AuthContext);

	const navigate = useNavigate();

	const { userText, onInputChange } = useForm({
		userText: '',
	});

	const onLogin = (event) => {
		event.preventDefault();
		//console.log('por aqui paso');
		if (userText.trim().length <= 1) return;
		//console.log('por aqui tambien paso');

		const lastPath = localStorage.getItem('lastPath') || '/';

		login(userText);

		navigate(lastPath, {
			replace: true,
		});
	};

	return (
		// <>
		// 	<div className='container m-5'>
		// 		<h1>Login</h1>
		// 		<hr />

		// 		<form onSubmit={onLogin}>
		// 			<input
		// 				type='text'
		// 				placeholder='Username'
		// 				className='form-control'
		// 				name='userText'
		// 				autoComplete='off'
		// 				value={userText}
		// 				onChange={onInputChange}
		// 			/>
		// 		</form>

		// 		<button className='btn btn-primary mt-2' onClick={onLogin}>
		// 			Login
		// 		</button>
		// 	</div>
		// </>

		<>
			<div className='container'>
				<div
					className='row justify-content-center align-items-center'
					style={{ height: '70vh' }}
				>
					<div className='col-md-4'>
						<div className='card'>
							<div className='card-body'>
								<h1 className='text-center'>Login</h1>
								<hr />

								<form onSubmit={onLogin}>
									<div className='form-group'>
										<input
											type='text'
											placeholder='Username'
											className='form-control'
											name='userText'
											autoComplete='off'
											value={userText}
											onChange={onInputChange}
										/>
									</div>

									<div className='form-group'>
										<button
											className='btn btn-primary mt-2'
											onClick={onLogin}
										>
											Login
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

LoginPage.propTypes = {};
