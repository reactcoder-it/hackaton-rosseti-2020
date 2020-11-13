import React, { useState, useEffect } from 'react'

import { SessionContext } from './context'
import { useFirebase } from '../../hooks/firebase'
import Loading from '../../components/Loading'

import { Session, UserData } from './types'

const withSession = (Component: any) => (props: any) => {
  const firebase = useFirebase()
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const listener = firebase?.auth.onAuthStateChanged((user) => {
      if (user != null) {
        firebase
          .getUserData(user.uid)
          .then((shapshot) => {
            shapshot.forEach((userSnapshot) => {
              const userData = userSnapshot.data() as UserData
              setSession({ user, userData })
              setLoading(false)
            })
          })
          .catch(() => {
            setSession(null)
            setLoading(false)
          })
      } else {
        setSession(null)
        setLoading(false)
      }
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
