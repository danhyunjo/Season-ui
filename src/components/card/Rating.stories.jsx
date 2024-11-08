import React from 'react';
import Rating from './Rating';

export default {
  title: 'Components/Rating',
  component: Rating,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#000000' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
  argTypes: {
    totalStars: {
      type: 'number',
      description: '별의 개수',
    },
    iconWidth: {
      type: 'number',
      description: '별의 크기(px)',
    },
  },
};

const Template = args => <Rating {...args} />;

export const Default = Template.bind({});
Default.args = {};
