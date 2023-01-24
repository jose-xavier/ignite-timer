import styled from 'styled-components'

export const CountdownContainer = styled.div`
  display: flex;
  gap: 1rem;

  font-family: 'Roboto Mono', monospace;
  line-height: 10rem;
  font-size: 10rem;
  font-weight: 700;

  span {
    background-color: ${(props) => props.theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`
export const Separetor = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme['green-500']};
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
`
