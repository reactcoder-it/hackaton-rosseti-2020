import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

import { config } from './config'

export type Auth = app.auth.Auth
export type Firestore = app.firestore.Firestore

export default class Firebase {
  constructor() {
    app.initializeApp(config)
    this.auth = app.auth()
    this.firestore = app.firestore()
  }

  public auth: Auth

  public doSignInWithEmailAndPassword = (email: string, password: string) =>
    this.auth.signInWithEmailAndPassword(email, password)

  public doCreateUserWithEmailAndPassword = (email: string, password: string) =>
    this.auth.createUserWithEmailAndPassword(email, password)

  public doSignOut = () => this.auth.signOut()

  public firestore: Firestore

  public addUserData = (
    firstName: string,
    middleName: string,
    lastName: string,
    numberOfEducationGroup: number,
    uid: string
  ) =>
    this.firestore
      .collection('users')
      .add({ firstName, middleName, lastName, numberOfEducationGroup, uid })

  public getUserData = (uid: string) =>
    this.firestore.collection('users').where('uid', '==', uid).limit(1).get()
}
