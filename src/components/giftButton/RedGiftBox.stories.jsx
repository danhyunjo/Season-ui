import React from 'react';
import RedGiftBox from './RedGiftBox';

export default {
  title: 'Components/GiftButton/RedGiftBox',
  component: RedGiftBox,
  parameters: {
    layout: 'centered',
  },
};

const Template = args => <RedGiftBox {...args} />;

export const Default = Template.bind({});
Default.args = {};
