import { createContext, useContext } from 'react'

import { Session } from './types'

const SessionContext = createContext<Session | null>(null)
const useSession = () => useContext(SessionContext)

export { SessionContext, useSession }
