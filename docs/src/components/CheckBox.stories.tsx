import React from 'react';
import { CheckBox, CheckBoxProps } from '@bean-ui/core';
// import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Core/CheckBox',
  component: CheckBox,
  argTypes: {
    theme: {
      control: 'select',
      options: ['light', 'dark'],
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
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    checked: {
      control: 'select',
      options: [true, false, undefined],
    },
    disabled: {
      control: 'select',
      options: [true, false],
    },
  },
};

const Template = (args: CheckBoxProps) => <CheckBox {...args} />;

export const Default = Template.bind({});

Default.args = {
  theme: 'light',
  color: 'deepPurple',
  scale: 500,
  checked: undefined,
  disabled: false,
};
