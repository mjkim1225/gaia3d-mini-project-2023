import { type FC } from 'react'
import styled from 'styled-components'

// style 안의 변수
interface StyleTypes {
    variant?: 'primary' | 'secondary'
}

// props 정의
interface ButtonTypes extends StyleTypes {
    title: string
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const ButtonStyle = styled.button<StyleTypes>`
  padding: 12px 24px;
  border: none;
  outline: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  color: white;
  background-color: ${({ variant }) =>
        variant === 'primary' ? '#e8ae1b' : '#7d4b00'};

  &:disabled {
    background: #e7e8e9;
    color: #9fa3a9;
    cursor: not-allowed;
  }
`

const Button: FC<ButtonTypes> = ({ title, onClick, variant = 'primary' }) => {
    return (
        <ButtonStyle type="button" onClick={onClick} variant={variant}>
            {title}
        </ButtonStyle>
    )
}

export default Button
