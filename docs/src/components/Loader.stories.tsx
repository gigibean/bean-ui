import React from 'react';
import { Loader, LoadingProps } from '@bean-ui/core';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { color, scale, theme } from 'src/argTypes';
import { type } from 'src/argTypes/loader';

export default {
  title: 'Core/Loader',
  component: Loader,
  argTypes: {
    theme,
    type,
    color,
    scale,
    size: {
      description: 'The scale of the component. It supports number and string',
      table: {
        type: {
          summary: 'number | string',
          detail: 'number: ${number}px | string: ${string}',
        },
      },
      control: 'text',
    },
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args: LoadingProps) => <Loader {...args} />;

export const Default = Template.bind({});

Default.args = {
  theme: 'light',
  type: 'spin',
  color: 'deepPurple',
  scale: 500,
  size: '30px',
};
