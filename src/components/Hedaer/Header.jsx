import Dropdown from '@mui/joy/Dropdown'
import Menu from '@mui/joy/Menu'
import MenuButton from '@mui/joy/MenuButton'
import MenuItem from '@mui/joy/MenuItem'
import React from 'react'
import { context } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { Tooltip } from '@mui/material'

const Header = () => {
	const { user, logOut } = context()

	const navigate = useNavigate()

	function handleLogOut() {
		logOut()
	}

	return (
		<div>
			<nav className='bg-white border-gray-200 dark:bg-gray-900'>
				<div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
					<a
						href='/'
						className='flex items-center space-x-3 rtl:space-x-reverse'
					>
						<span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
							Chat
						</span>
					</a>
					<div className='flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
						<button type='button'>
							{user ? (
								<>
									<Tooltip title={user.displayName}>
										<Dropdown>
											<MenuButton
												sx={{
													background: 'none'
												}}
											>
												<img
													style={{
														width: '30px',
														height: '30px',
														marginTop: '5px',
														background: 'red',
														borderRadius: '50%'
													}}
													src={user.photoURL}
													alt={user.displayName}
												/>
											</MenuButton>
											<Menu>
												<MenuItem onClick={handleLogOut}>Log Out</MenuItem>
											</Menu>
										</Dropdown>
									</Tooltip>
								</>
							) : (
								<Dropdown className='Drope'>
									<MenuButton
										sx={{
											color: 'white'
										}}
									>
										User
									</MenuButton>
									<Menu>
										<MenuItem onClick={() => navigate('/sign_up')}>
											Sign Up
										</MenuItem>
										<MenuItem onClick={() => navigate('/sign_in')}>
											Sign In
										</MenuItem>
									</Menu>
								</Dropdown>
							)}
						</button>
					</div>
					<div
						className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
						id='navbar-cta'
					>
						<ul className='flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
							<li>
								<a
									href='#'
									className='block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500'
									aria-current='page'
								>
									Home
								</a>
							</li>
							<li>
								<a
									href='#'
									className='block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
								>
									About
								</a>
							</li>
							<li>
								<a
									href='#'
									className='block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
								>
									Services
								</a>
							</li>
							<li>
								<a
									href='#'
									className='block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
								>
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	)
}

export default Header
