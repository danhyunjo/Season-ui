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
        type: 'object',
      },
      defaultValue: [{ label: 'Home' }, { label: 'About' }, { label: 'Event' }],
    },
  },
};

const Template = args => <TabList {...args} />;

export const Default = Template.bind({});
Default.args = {
  tabs: [{ label: 'Home' }, { label: 'About' }, { label: 'Event' }],
};
