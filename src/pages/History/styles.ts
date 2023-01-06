import styled from 'styled-components'

export const HistoryContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;

  padding: 3.5rem;

  h1 {
    color: ${(props) => props.theme['gray-100']};
    font: 1.5rem;
    line-height: 1.6;
  }
`

export const HistoryList = styled.div`
  flex: 1;
  margin-top: 2rem;
  padding: 1rem;

  table {
    width: 100%;
    padding: 1rem;
    overflow: auto;
    border-collapse: collapse;

    th {
      background-color: ${(props) => props.theme['gray-700']};
      color: ${(props) => props.theme['gray-100']};
      text-align: left;
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        padding-left: 1.5rem;
        border-top-left-radius: 8px;
      }

      &:last-child {
        padding-right: 1.5rem;
        border-top-right-radius: 8px;
      }
    }

    td {
      color: ${(props) => props.theme['gray-300']};
      background-color: ${(props) => props.theme['gray-700']};
      text-align: left;
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;
      border-top: 4px solid ${(props) => props.theme['gray-800']};

      &:first-child {
        padding-left: 1.5rem;
        width: 50%;
      }

      &:last-child {
        padding-left: 1.5rem;
      }
    }
  }
`

const STATUS_COLORS = {
  green: 'green-500',
  yellow: 'yellow-500',
  red: 'red-500',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const Status = styled.span<StatusProps>`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;

  ::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    background-color: ${(props) =>
      props.theme[STATUS_COLORS[props.statusColor]]};
    border-radius: 9999px;
  }
`
