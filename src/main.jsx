import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import MyRoutes from './Routes/MyRoutes.jsx'
import './index.css'
import AuthContext from './context/AuthContext.jsx'
import ProductContext from './context/ProductContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<ProductContext>
		<AuthContext>
			<BrowserRouter>
				<App />
				<MyRoutes />
			</BrowserRouter>
		</AuthContext>
	</ProductContext>
)
