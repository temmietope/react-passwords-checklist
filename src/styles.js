import styled, { css } from 'styled-components'

export const PasswordChecklistWrapper = styled.ul`
  text-align: left;
`

export const PasswordChecklistItem = styled.li`
  position: relative;
  list-style: none;
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1rem')};
  span.value {
    padding-left: 1rem;
  }
  .mark {
    color: ${(props) => (props.failIconColor ? props.failIconColor : 'red')};
  }
  ${(props) =>
    props.valid &&
    css`
      .mark {
        color: ${(props) =>
          props.checkIconColor ? props.checkIconColor : 'green'};
      }
    `}
`
