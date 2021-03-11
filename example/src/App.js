import React from 'react'
import PasswordChecklist from 'react-passwords-checklist'

const App = () => {
  const password = '123abcABc@'
  return (
    <PasswordChecklist
      password={password}
      minLength={3}
      conditions={['length', 'number', 'specialChar', 'uppercase', 'lowercase']}
      checkIcon={'mark'}
      failIcon={'fail'}
      checkIconColor={'green'}
      failIconColor={'red'}
      fontSize='1rem'
    />
  )
}

export default App
