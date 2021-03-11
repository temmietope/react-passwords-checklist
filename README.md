# react-passwords-checklist

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-passwords-checklist.svg)](https://www.npmjs.com/package/react-passwords-checklist) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-passwords-checklist
```

## Usage

```jsx
import React, { Component } from 'react'

import PasswordChecklist from 'react-passwords-checklist'

const App = () => {
  return <PasswordChecklist password={password} />
}
```

### Props

| Props                   | Description                                                  | Type   | Default value                                                       | options                                                                                           |
| ----------------------- | ------------------------------------------------------------ | ------ | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| **password**            | Password for testing                                         | String | -                                                                   | -                                                                                                 |
| **minLength**           | Minimum password length                                      | Number | 8                                                                   | -                                                                                                 |
| **conditions**          | Array of custom conditions you want to check for on password | Array  | {['length', 'number','specialChar', 'uppercase', 'lowercase']}      | {['length', 'number','specialChar', 'uppercase', 'lowercase']}                                    |
| **checkIcon**           | Icon to indicate that the test passed                        | String | '&#10003;'                                                          | Desired icon                                                                                      |
| **failIcon**            | Icon to indicate that the test failed                        | String | '&#x2715;'                                                          | Desired icon                                                                                      |
| **checkIconColor**         | Color of checkIcon                                     | String | 'green'                                                              | Desired color in _rgba_, _hex_, etc.                                                              |
| **failIcon** | Color of failIcon                                     | String | 'red'                                                        | Desired color in _rgba_, _hex_, etc.                                                            |
| **fontSize**          | Font size of checklist                                 | String | '1rem'                                                           | Desired font-size in _px_, _rem_, etc |

### Example Usage with various props

```jsx
import React from 'react'
import PasswordChecklist from 'react-passwords-checklist'

const App = () => {
  const password = '123abcABc@'
  return (
    <PasswordChecklist
      password={password}
      minLength={3}
      conditions={['length', 'number', 'specialChar', 'uppercase', 'lowercase']}
      checkIconColor={'green'}
      failIconColor={'red'}
      fontSize='1rem'
    />
  )
}
```

## License

MIT © [temmietope](https://github.com/temmietope)
