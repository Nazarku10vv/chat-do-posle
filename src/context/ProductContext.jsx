import React, { createContext, useContext, useState } from 'react'
import { db } from '../firebase'
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore'

const Context = createContext()
export const productContext = () => useContext(Context)

const ProductContext = ({ children }) => {
	const [data, setData] = useState([])
	const productCollectionRef = collection(db, 'chat')

	async function addProduct(newProduct) {
		await addDoc(productCollectionRef, newProduct)
		readProduct()
	}

	async function readProduct() {
		const data = await getDocs(productCollectionRef)
		const response = data.docs.map(item => ({ id: item.id, ...item.data() }))
		setData(response)
	}

	async function deleteProduct(id) {
		const data1 = await deleteDoc(doc(productCollectionRef, id))
		setData(data1)
	}

	const values = {
		addProduct,
		readProduct,
		data,
		deleteProduct
	}

	return <Context.Provider value={values}>{children}</Context.Provider>
}

export default ProductContext
