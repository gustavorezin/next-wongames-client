import { Meta, StoryFn } from '@storybook/react'
import { BannerSlider, BannerSliderProps } from '.'
import { BannerProps } from '../banner'

const items: BannerProps[] = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEYO2fTMRyOHxoQRrw1gxn5UxDWM6L5IARbw&s',
    title: 'Defy death 1',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
    ribbon: 'Bestselling'
  },
  {
    img: 'https://360guide.info/wp-content/uploads/MG_0128-1042x580.jpg',
    title: 'Defy death 2',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  {
    img: 'https://www.waves.com.br/wp-content/uploads/2019/11/ripcurl_vilavelha-8-1042x580.jpg',
    title: 'Defy death 3',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  }
]

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'dark' }
  }
} as Meta

export const Default: StoryFn<BannerSliderProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <BannerSlider {...args} />
  </div>
)
