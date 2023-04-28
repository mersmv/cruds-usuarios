import { useState } from 'react';
import Button from '../Button/Button';
import {
	StyledForm,
	StyledHeader,
	StyledIcon,
	StyledIconCross,
	StyledInput,
	StyledModal,
	StyledNewUser
} from './styles';
const Header = () => {
	const [user, setUser] = useState({
		username: '',
		name: '',
		email: '',
		title: '',
		age: '',
		gender: '',
		profileimage: ''
	});
	const [modal, setModal] = useState(false);
	return (
		<StyledHeader>
			<form action=''>
				<StyledInput type='text' placeholder='Find your user:'></StyledInput>
			</form>
			<StyledNewUser
				onClick={() => {
					setModal(!modal);
				}}
			>
				New User
				<StyledIcon src='/images/user-plus-solid.svg' alt='' />
			</StyledNewUser>

			{modal && (
				<StyledModal>
					<StyledForm onSubmit={handleSubmit}>
						<label>
							Name:
							<input
								type='text'
								onChange={e => setUser({ ...user, name: e.target.value })}
							/>
						</label>
						<label>
							Username:
							<input
								type='text'
								onChange={e => setUser({ ...user, username: e.target.value })}
							/>
						</label>
						<label>
							Mail:
							<input
								type='text'
								onChange={e => setUser({ ...user, mail: e.target.value })}
							/>
						</label>
						<label>
							Title:
							<select
								onChange={e => setUser({ ...user, title: e.target.value })}
							>
								<option value='Ms'>Ms</option>
								<option value='Mrs'>Mrs</option>
							</select>
						</label>
						<label>
							Age:
							<input
								type='text'
								onChange={e => setUser({ ...user, age: e.target.value })}
							/>
						</label>
						<label>
							Gender:
							<select
								value={user.gender}
								onChange={e => createURL(user, setUser)}
							>
								<option value='women'>F</option>
								<option value='men'>M</option>
							</select>
						</label>
						<input type='submit' text={'Send'} color={'#b5c2b7'} />
					</StyledForm>
					<StyledIconCross
						src='/images/x-solid.svg'
						alt=''
						onClick={() => setModal(false)}
					/>
				</StyledModal>
			)}
		</StyledHeader>
	);
};

const fetchData = async (url, ...options) => {
	console.log('FETCH');
	const request = await fetch(url, ...options);
	const data = await request.json();
	return data;
};

const handleSubmit = e => {
	console.log('SUBMIT');
	e.preventDefault();

	fetchData('http://127.0.0.1:3000/api/users/', {
		method: 'POST',
		body: JSON.stringify(user),
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	});
};

const createURL = ({ user, setUser }) => {
	setUser({ ...user, gender: e.target.value });
	let url = '';
	if (user.gender === 'women') {
		url =
			'https://randomuser.me/api/portraits/women/' +
			Math.floor(Math.random() * 99) +
			1;
		return url;
	} else {
		url =
			'https://randomuser.me/api/portraits/men/' +
			Math.floor(Math.random() * 99) +
			1;
		return url;
	}
};

export default Header;
