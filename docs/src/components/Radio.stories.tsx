import React from 'react';
import { Radio, RadioProps } from '@bean-ui/core';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { color, scale, size, theme } from 'src/argTypes';
import { checked, required } from 'src/argTypes/input';

export default {
  title: 'Core/Radio',
  component: Radio,
  argTypes: {
    theme,
    color,
    scale,
    size,
    checked,
    required,
  },

  args: {
    theme: 'light',
    color: 'deepPurple',
    scale: 500,
    checked: undefined,
    disabled: false,
    required: false,
  },
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args: RadioProps) => <Radio {...args} />;

export const Default = Template.bind({});

export const Radios = () => {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
  });

  return (
    <div>
      <Radio {...controlProps('a')} color="deepPurple" />
      <Radio {...controlProps('b')} color="orange" />
      <Radio {...controlProps('c')} color="blue" />
      <Radio {...controlProps('d')} color="green" />
    </div>
  );
};
