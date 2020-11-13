import { createContext, useContext } from 'react'
import Firebase from './firebase'

const FirebaseContext = createContext<Firebase | null>(null)
const useFirebase = () => useContext(FirebaseContext)

export { FirebaseContext, useFirebase }
