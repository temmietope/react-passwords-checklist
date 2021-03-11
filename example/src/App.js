import React from 'react'
import PasswordChecklist from 'react-passwords-checklist'

const App = () => {
  const password = '123abcABC'
  return <PasswordChecklist password={password} minLength={3} />
}

export default App
