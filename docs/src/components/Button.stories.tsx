import React from 'react';
import { StyleButtonProps, Button } from '@bean-ui/core';
import { colors } from '@bean-ui/common';

export default {
  title: 'Core/Button',
  component: Button,
  argTypes: {
    theme: {
      control: 'select',
      options: ['purple', 'white', 'lightGray', 'borderGray', 'noBorderGray', 'noBoderPurple'],
    },
    borderRadius: { control: 'select', options: ['small', 'large'] },
    size: { control: 'select', options: ['xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'] },
    stretch: { control: 'select', options: [true, false] },
    loadingColor: { control: 'color' },
    loadingType: {
      control: 'select',
      options: [
        'blank',
        'balls',
        'bars',
        'bubbles',
        'cubes',
        'cylon',
        'spin',
        'spinningBubbles',
        'spokes',
      ],
    },
    loadingSize: { control: 'text' },
    children: { control: 'text' },
    isLoading: { control: 'select', options: [true, false] },
    disabled: { control: 'select', options: [true, false] },
  },
};

const Template = (args: StyleButtonProps) => {
  return <Button {...args} />;
};

export const Default = Template.bind({});
export const Loading = Template.bind({});
export const Disabled = Template.bind({});

Default.args = {
  theme: 'purple',
  borderRadius: 'small',
  size: 'm',
  stretch: false,
  loadingColor: colors.purple[100],
  loadingType: 'spin',
  loadingSize: '30px',
  children: '버튼클릭',
};

Loading.args = {
  theme: 'purple',
  borderRadius: 'small',
  size: 'm',
  stretch: false,
  loadingColor: colors.purple[100],
  loadingType: 'spin',
  loadingSize: '30px',
  children: 'hi',
  isLoading: true,
};

Disabled.args = {
  theme: 'lightGray',
  borderRadius: 'small',
  size: 'm',
  stretch: false,
  loadingColor: colors.purple[100],
  loadingType: 'spin',
  loadingSize: '30px',
  children: '버튼클릭안됨',
  disabled: true,
};
