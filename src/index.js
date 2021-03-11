import React from 'react'
import { PasswordChecklistWrapper, PasswordChecklistItem } from './styles'
import { passwordChecker } from './passwordChecker'
import PropTypes from 'prop-types'

const PasswordChecklist = ({
  password,
  conditions,
  minLength,
  checkIcon,
  failIcon,
  checkIconColor,
  failIconColor,
  fontSize,
  className
}) => {
  const minimum = minLength ? minLength : 8

  const defaultConditions = {
    number: 'Password has a number',
    lowercase: 'Password has a lowercase',
    uppercase: 'Password has an uppercase',
    specialChar: 'Password has a specialChar',
    length: `Password has a minimum of ${minimum} characters`
  }

  const conditionsArray = conditions
    ? conditions
    : Object.keys(defaultConditions)

  const getArraysIntersection = (a1, a2) => {
    return a1.filter(function (n) {
      return a2.indexOf(n) !== -1
    })
  }
  const checklist = getArraysIntersection(
    conditionsArray,
    Object.keys(defaultConditions)
  )
  const customCheck = <span className='mark'>{checkIcon}</span>
  const customFail = <span className='mark'>{failIcon}</span>
  const check = <span className='mark'>&#10003;</span>
  const fail = <span className='mark'>&#x2715;</span>
  return (
    <PasswordChecklistWrapper className={className}>
      {checklist.map((key) => {
        const valid = passwordChecker(password, 7)[key]
        return (
          <PasswordChecklistItem
            key={key}
            valid={valid}
            checkIconColor={checkIconColor}
            failIconColor={failIconColor}
            fontSize={fontSize}
          >
            {valid
              ? checkIcon
                ? customCheck
                : check
              : failIcon
              ? customFail
              : fail}
            <span className='value'>{defaultConditions[key]}</span>
          </PasswordChecklistItem>
        )
      })}
    </PasswordChecklistWrapper>
  )
}

PasswordChecklist.propTypes = {
  password: PropTypes.string,
  conditions: PropTypes.array,
  minLength: PropTypes.number,
  checkIcon: PropTypes.string,
  failIcon: PropTypes.string,
  checkIconColor: PropTypes.string,
  failIconColor: PropTypes.string,
  fontSize: PropTypes.string,
  className: PropTypes.string
}

export default PasswordChecklist
