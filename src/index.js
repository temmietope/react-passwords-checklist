import React from 'react'
import { PasswordChecklistWrapper, PasswordChecklistItem } from './styles'
import { passwordChecker } from './passwordChecker'
import PropTypes from 'prop-types'

const PasswordChecklist = ({ password, rules, minLength }) => {
  const minimum = minLength ? minLength : 8

  const conditions = {
    number: 'Password has a number',
    lowercase: 'Password has a lowercase',
    uppercase: 'Password has an uppercase',
    specialChar: 'Password has a specialChar',
    length: `Password has a minimum of ${minimum} characters`
  }

  const rulesArray = rules ? rules : Object.keys(conditions)
  console.log(rulesArray)

  const getArraysIntersection = (a1, a2) => {
    return a1.filter(function (n) {
      return a2.indexOf(n) !== -1
    })
  }
  const checklist = getArraysIntersection(rulesArray, Object.keys(conditions))
  const check = <span className='mark'>&#10003;</span>
  const fail = <span className='mark'>&#x2715;</span>
  return (
    <PasswordChecklistWrapper>
      {checklist.map((key) => {
        const valid = passwordChecker(password, 7)[key]
        return (
          <PasswordChecklistItem key={key} valid={valid}>
            {valid ? check : fail}
            <span className='value'>{conditions[key]}</span>
          </PasswordChecklistItem>
        )
      })}
    </PasswordChecklistWrapper>
  )
}

PasswordChecklist.propTypes = {
  password: PropTypes.string,
  rules: PropTypes.array,
  minLength: PropTypes.number
}

export default PasswordChecklist
