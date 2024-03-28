import { initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyBlx5J6Sdpk82ugz4Ul2T6WFWZJeIMTUh4',
	authDomain: 'chat-firebase-f5cb9.firebaseapp.com',
	projectId: 'chat-firebase-f5cb9',
	storageBucket: 'chat-firebase-f5cb9.appspot.com',
	messagingSenderId: '17406099472',
	appId: '1:17406099472:web:1105528ae235ef6c81ca95'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const storage = getStorage()
export const auth = getAuth(app)
export default app
