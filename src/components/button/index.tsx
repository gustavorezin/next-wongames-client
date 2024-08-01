import * as S from './styles'

export type ButtonProps = {
  children?: React.ReactNode
  icon?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
}

export function Button({
  children,
  icon,
  size = 'medium',
  fullWidth = false,
  ...props
}: ButtonProps) {
  return (
    <S.Wrapper size={size} fullWidth={fullWidth} hasIcon={!!icon} {...props}>
      {icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  )
}
