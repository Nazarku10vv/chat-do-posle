import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { context } from '../../context/AuthContext'

const SignIn = () => {
	const { logIn } = context()
	const [email, setEmail] = useState('')
	const navigate = useNavigate()
	const [password, setPassword] = useState('')

	function handleLogIn() {
		logIn(email, password)
		setEmail('')
		setPassword('')
		navigate('/')
	}
	return (
		<div className='mainBlocg'>
			<div className='signIn'>
				<div className='max-w-sm py-10 px-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
				<button
						type='button'
						className=' mt-1 text-white bg-none  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  py-5 me-2 mb-2  focus:outline-none '
						onClick={() => navigate('/')}
					>
						Назадь
					</button>
					<h1 className='text-center text-white mb-5'>Sign In</h1>

					<label
						for='first_name'
						className='block mb-2 text-sm font-medium text-gray-900 text-white '
					>
						Email
					</label>
					<input
						type='text'
						id='first_name'
						className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						placeholder='Email'
						onChange={e => setEmail(e.target.value)}
						required
					/>

					<label
						for='first_name'
						className='block mb-2 mt-4 text-sm font-medium text-gray-900 text-white '
					>
						Password
					</label>
					<input
						type='text'
						id='first_name'
						className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						placeholder='Password'
						onChange={e => setPassword(e.target.value)}
						required
					/>

					<button
						type='button'
						className='w-[300px] mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
						onClick={handleLogIn}
					>
						Create
					</button>
				</div>
			</div>
		</div>
	)
}

export default SignIn
