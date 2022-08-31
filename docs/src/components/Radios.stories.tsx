import React from 'react';
import { Radio, RadioProps } from '@bean-ui/core';

const Radios = () => {
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
export default {
  component: Radios,
  title: 'Core/Radio/Radios',
};

const Template = () => <Radios />;

export const Default = Template.bind({});
