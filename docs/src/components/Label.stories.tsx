import React, { useState } from 'react';
import { Label, LabelProps, CheckBox, Radio } from '@bean-ui/core';
import { disabled, size, theme } from 'src/argTypes';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { control, label } from 'src/argTypes/input';

export default {
  title: 'Core/Form/Label',
  component: Label,
  argTypes: {
    theme,
    size,
    disabled,
    label,
    control,
  },
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args: LabelProps) => <Label {...args} />;

export const Default = Template.bind({});

Default.args = {
  theme: 'light',
  label: 'deepPurple',
  disabled: false,
};

export const LabelCheckBox = () => {
  const [state, setState] = React.useState({
    red: true,
    blue: false,
    green: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { red, blue, green } = state;

  const controlProps = (item: string) => ({
    onChange: handleChange,
    name: item,
    id: item,
  });

  return (
    <div>
      <CheckBox checked={red} {...controlProps('red')} color="red" />
      <Label for="red" label="red" />

      <CheckBox checked={blue} {...controlProps('blue')} color="blue" />
      <Label for="blue" label="blue" />

      <CheckBox checked={green} {...controlProps('green')} color="green" disabled />
      <Label for="green" label="green" disabled />
    </div>
  );
};

export const LabelRadio = () => {
  const [selectedValue, setSelectedValue] = React.useState('red');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    id: item,
  });

  return (
    <div>
      <Label label="orange" control={<Radio {...controlProps('orange')} color="orange" />} />

      <Label
        label="deepPurple"
        control={<Radio {...controlProps('deepPurple')} color="deepPurple" />}
      />

      <Label label="lime" control={<Radio {...controlProps('lime')} color="lime" />} />
    </div>
  );
};
