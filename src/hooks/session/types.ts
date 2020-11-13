import app from 'firebase/app'

export type User = app.User

export interface Session {
  user: User
  userData: UserData
}

export interface UserData {
  firstName: string
  middleName: string
  lastName: string
  numberOfEducationGroup: number
}
