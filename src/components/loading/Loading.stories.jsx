import React from 'react';
import Loading from './Loading';

export default {
  title: 'Components/Loading',
  component: Loading,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      type: 'number',
      description: '로딩 컴포넌트의 크기(px)',
    },
  },
};

const Template = args => <Loading {...args} />;

export const Default = Template.bind({});
Default.args = {};
