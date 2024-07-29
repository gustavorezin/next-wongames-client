import { render, screen } from '@testing-library/react'

import { Main } from '.'

describe('<main />', () => {
  it('should render the heading', () => {
    // renderiza o componente
    const { container } = render(<Main />)

    // busca o elemento e verifica a existencia
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    // gerar snapshot
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    //renderiza o componente
    const { container } = render(<Main />)

    // verifica se o background-color esta correto
    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
