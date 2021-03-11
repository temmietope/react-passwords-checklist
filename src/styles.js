import styled, { css } from 'styled-components'

export const PasswordChecklistWrapper = styled.ul`
  text-align: left;
`

export const PasswordChecklistItem = styled.li`
  position: relative;
  list-style: none;
  span.value {
    padding-left: 1rem;
  }
  .mark {
    color: red;
  }
  ${(props) =>
    props.valid &&
    css`
      .mark {
        color: green;
      }
    `}
`
