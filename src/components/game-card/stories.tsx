import { Meta, StoryFn } from '@storybook/react'
import { GameCard, GameCardProps } from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://shared.steamstatic.com/store_item_assets/steam/apps/1239430/header.jpg?t=1635865376',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00'
  },
  argTypes: {
    onFav: { action: 'clicked' },
    ribbon: { type: 'string' }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryFn<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

export const WithRibbon: StoryFn<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonSize: 'small',
  ribbonColor: 'primary'
}
