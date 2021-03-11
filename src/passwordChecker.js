export const passwordChecker = (word, length) => {
  const minLength = length ? length : 8
  const regex = new RegExp(`.{${minLength}\,}`)
  const hasUppercaseLetter = (word) => !!word.match(/[A-Z]/)
  const hasNumber = (word) => !!word.match(/[0-9]/)
  const hasLowercaseLetter = (word) => !!word.match(/[a-z]/)
  const hasSpecialLetter = (word) => !!word.match(/[-!@#$%^&*(),.?":{}|<>]/)
  const hasMinLength = (word) => !!regex.test(word)

  const validator = {
    number: hasNumber(word),
    lowercase: hasLowercaseLetter(word),
    uppercase: hasUppercaseLetter(word),
    specialChar: hasSpecialLetter(word),
    length: hasMinLength(word)
  }

  return validator
}
