import { Meta, StoryFn } from '@storybook/react'
import { Banner, BannerProps } from '.'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://www.arx.pt/wp-content/uploads/2016/09/Malveira-7-1042x580.jpg',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: StoryFn<BannerProps> = (args) => <Banner {...args} />
