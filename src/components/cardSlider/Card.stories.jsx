import React from 'react';
import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
};

const Template = args => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {};
