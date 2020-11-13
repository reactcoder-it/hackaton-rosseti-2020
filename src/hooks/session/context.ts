import { createContext, useContext } from 'react'
import app from 'firebase/app'

type User = app.User

const SessionContext = createContext<User | null>(null)
const useSession = () => useContext(SessionContext)

export { SessionContext, useSession }
