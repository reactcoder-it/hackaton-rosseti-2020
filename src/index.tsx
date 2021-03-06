import React from 'react'
import ReactDOM from 'react-dom'

import Firebase, { FirebaseContext } from './hooks/firebase'
import App from './App'

import './index.css'

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
)
