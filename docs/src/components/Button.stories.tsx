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
      ],
    },
    // loadingSize: { control: 'text' },
    children: { control: 'text' },
    isLoading: { control: 'select', options: [true, false] },
    disabled: { control: 'select', options: [true, false] },
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
  color: 'purple',
  children: 'button',
  isLoading: false,
  disabled: false,
};

// Loading.args = {
//   theme: 'purple',
//   borderRadius: 'small',
//   size: 'm',
//   stretch: false,
//   loadingColor: colors.purple[100],
//   loadingType: 'spin',
//   loadingSize: '30px',
//   children: 'hi',
//   isLoading: true,
// };

// Disabled.args = {
//   theme: 'lightGray',
//   borderRadius: 'small',
//   size: 'm',
//   stretch: false,
//   loadingColor: colors.purple[100],
//   loadingType: 'spin',
//   loadingSize: '30px',
//   children: '버튼클릭안됨',
//   disabled: true,
// };
