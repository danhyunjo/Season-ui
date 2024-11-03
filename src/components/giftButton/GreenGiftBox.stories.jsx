import React from 'react';
import GreenGiftBox from './GreenGiftBox';

export default {
  title: 'Components/GiftButton/GreenGiftBox',
  component: GreenGiftBox,
  parameters: {
    layout: 'centered',
  },
};

const Template = args => <GreenGiftBox {...args} />;

export const Default = Template.bind({});
Default.args = {};
