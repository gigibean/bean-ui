import React from 'react';
import { Loader, LoadingProps } from '@bean-ui/core';
// import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Core/Loader',
  component: Loader,
  argTypes: {
    theme: {
      control: 'select',
      options: ['light', 'dark'],
    },
    type: {
      control: 'select',
      options: ['blank', 'bubbles', 'cylon', 'spin', 'spinningBubbles', 'spokes'],
    },
    color: {
      control: 'select',
      options: [
        'red',
        'pink',
        'purple',
        'deepPurple',
        'indigo',
        'blue',
        'lightBlue',
        'green',
        'lightGreen',
        'lime',
        'yellow',
        'amber',
        'orange',
        'deepOrange',
        'brown',
        'gray',
        '#FFB3B3',
        'rgb(63, 167, 150)',
      ],
    },
    scale: {
      control: 'select',
      options: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    size: {
      control: 'text',
    },
  },
};

const Template = (args: LoadingProps) => <Loader {...args} />;

export const Default = Template.bind({});

Default.args = {
  theme: 'light',
  type: 'spin',
  color: 'deepPurple',
  scale: 500,
  size: '30px',
};
