import React from 'react';
import { Button, BaseButtonProps } from '@bean-ui/core';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { theme, size, variant, color, scale, children, disabled } from 'src/argTypes';
import { href, isLoading, stretch } from 'src/argTypes/button';

export default {
  title: 'Core/Button',
  component: Button,
  argTypes: {
    theme: theme,
    size: size,
    stretch: stretch,
    variant: variant,
    color: color,
    scale: scale,
    children: children,
    isLoading: isLoading,
    disabled: disabled,
    href: href,
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: BaseButtonProps) => {
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
