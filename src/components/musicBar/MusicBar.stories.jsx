import React from 'react';
import MusicBar from './MusicBar';

export default {
  title: 'Components/MusicBar',
  component: MusicBar,
  parameters: {
    layout: 'centered',
  },
};

const Template = args => <MusicBar {...args} />;

export const Default = Template.bind({});
Default.args = {};
