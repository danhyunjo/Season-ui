import React from 'react';
import TabList from './TabList';

export default {
  title: 'Components/TabList',
  component: TabList,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    tabs: {
      control: {
        type: 'array',
      },
      description: 'tab option들의 정보를 담은 배열입니다',
    },
  },
};

const Template = args => <TabList {...args} />;

export const Default = Template.bind({});
Default.args = {};
