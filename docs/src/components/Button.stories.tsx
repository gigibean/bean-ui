import React from 'react';
import { Button, BaseButtonProps } from '@bean-ui/core';
export default {
  title: 'Core/Button',
  component: Button,
  argTypes: {
    theme: {
      control: 'select',
      options: ['light', 'dark'],
    },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    stretch: { control: 'select', options: [true, false] },
    variant: { control: 'select', options: ['contained', 'text', 'outlined'] },
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
    // loadingSize: { control: 'text' },
    children: { control: 'text' },
    isLoading: { control: 'select', options: [true, false] },
    disabled: { control: 'select', options: [true, false] },
    href: { control: 'text' },
  },
};

const Template = (args: BaseButtonProps) => {
  return <Button {...args} />;
};

export const Default = Template.bind({});
export const Loading = Template.bind({});
export const Disabled = Template.bind({});

Default.args = {
  theme: 'light',
  size: 'medium',
  stretch: false,
  variant: 'contained',
  color: 'deepPurple',
  scale: 500,
  children: 'button',
  isLoading: false,
  disabled: false,
};

Loading.args = {
  theme: 'light',
  size: 'medium',
  stretch: false,
  variant: 'contained',
  color: 'deepPurple',
  scale: 500,
  children: 'button',
  isLoading: true,
  disabled: false,
};

Disabled.args = {
  theme: 'light',
  size: 'medium',
  stretch: false,
  variant: 'contained',
  color: 'deepPurple',
  scale: 500,
  children: 'button',
  isLoading: false,
  disabled: true,
};
