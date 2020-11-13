import app from 'firebase/app'
import 'firebase/auth'

import { config } from './config'

export type Auth = app.auth.Auth

export default class Firebase {
  constructor() {
    app.initializeApp(config)
    this.auth = app.auth()
  }

  public auth: Auth

  public doSignInWithEmailAndPassword = (email: string, password: string) =>
    this.auth.signInWithEmailAndPassword(email, password)

  public doSignOut = () => this.auth.signOut()
}
