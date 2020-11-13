import React, { useState, useEffect } from 'react'
import app from 'firebase/app'

import { SessionContext } from './context'
import { useFirebase } from '../../hooks/firebase'
import Loading from '../../components/Loading'

type User = app.User

const withSession = (Component: any) => (props: any) => {
  const firebase = useFirebase()
  const [session, setSession] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const listener = firebase?.auth.onAuthStateChanged((newSession) => {
      setSession(newSession || null)
      setLoading(false)
    })
    return () => {
      if (listener) listener()
    }
  }, [firebase])

  if (loading) {
    return <Loading />
  }

  return (
    <SessionContext.Provider value={session}>
      <Component {...props} />
    </SessionContext.Provider>
  )
}

export default withSession
