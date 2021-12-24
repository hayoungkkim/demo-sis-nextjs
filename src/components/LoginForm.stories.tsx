import { LoginForm } from './LoginForm'

import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Example/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  parameters: {
    docs: {
      description: {
        component: '로그인폼'
      }
    }
  }
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />

export const Default = Template.bind({})
Default.storyName = 'LoginForm'
Default.args = {}
