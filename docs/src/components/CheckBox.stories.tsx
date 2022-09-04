import React from 'react';
import { CheckBox, CheckBoxProps } from '@bean-ui/core';
import { color, disabled, scale, size, theme } from 'src/argTypes';
import { checked, defaultChecked } from 'src/argTypes/input';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Core/CheckBox',
  component: CheckBox,
  argTypes: {
    theme,
    color,
    scale,
    size,
    checked,
    disabled,
    defaultChecked,
  },
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args: CheckBoxProps) => <CheckBox {...args} />;

export const Default = Template.bind({});

Default.args = {
  theme: 'light',
  color: 'deepPurple',
  scale: 500,
  checked: undefined,
  disabled: false,
  defaultChecked: false,
};
