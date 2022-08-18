import React from 'react';
import { Loader, LoadingProps } from '@bean-ui/core';
// import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Core/Loader',
  component: Loader,
  argTypes: {
    type: {
      control: 'select',
      options: ['blank', 'bubbles', 'cylon', 'spin', 'spinningBubbles', 'spokes'],
    },
    color: {
      control: 'color',
      //   presetsColors: [theme.color.green],
    },
    margin: {
      control: 'text',
    },
    padding: {
      control: 'text',
    },
    size: {
      control: 'text',
    },
  },
};

const Template = (args: LoadingProps) => <Loader {...args} />;

export const Default = Template.bind({});

Default.args = {
  type: 'spin',
  // color: '#00CE7C',
  // margin: '0 auto',
  // padding: '1rem',
  // size: '30px',
};
