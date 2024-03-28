import React from 'react'
import MainPage from '../Page/MainPage'
import { Route, Routes } from 'react-router-dom'
import SignIn from '../components/Authentication/SignIn'
import SignUp from '../components/Authentication/SignUp'

const MyRoutes = () => {
	const RoutesArray = [
		{
			path: '/',
			element: <MainPage />,
			key: 1
		},
		{
			path: '/sign_in',
			element: <SignIn />,
			key: 2
		},
		{
			path: '/sign_up',
			element: <SignUp />,
			key: 3
		}
	]
	return (
		<Routes>
			{RoutesArray.map(el => (
				<Route path={el.path} element={el.element} key={el.key} />
			))}
		</Routes>
	)
}

export default MyRoutes
