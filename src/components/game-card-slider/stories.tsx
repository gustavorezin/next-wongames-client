import { Meta, StoryFn } from '@storybook/react'
import { GameCardSlider } from '.'
import { GameCardProps } from '../game-card'

const items = [
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://www.lloydmotorgroup.com/ImageLibrary/images/Volkswagen/New-Cars/T-Roc/Volkswagen-%20Style-Model-Card-300x140px.jpg?height=140&mode=boxpad&upscale=true&width=300',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://www.lloydmotorgroup.com/ImageLibrary/images/Volkswagen/New-Cars/T-Roc/T-Roc-Cabriolet/Volkswagen-T-Roc-Style-%20Model-Card-300x140px.jpg',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://www.curiousmomentsphotography.co.uk/wp-content/uploads/2024/06/300x140px.png',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://aerostudies.com/wp-content/uploads/2021/02/aaa-300x140px.jpg',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://www.spanestesiologia.pt/webstspa/wp-content/uploads/2022/02/banner-spa-300x140px-xi-curso-de-introducao-a-anestesiologia.png',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  }
]

export default {
  title: 'GameCardSlider',
  component: GameCardSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: StoryFn<GameCardProps[]> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameCardSlider items={args} {...args} />
  </div>
)
