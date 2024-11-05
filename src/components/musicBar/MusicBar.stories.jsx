import React from 'react';
import MusicBar from './MusicBar';

export default {
  title: 'Components/MusicBar',
  component: MusicBar,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    width: { control: 'number', description: '음악 박스의 너비(px)' },
    albumCover: { control: 'text', description: '앨범 커버 이미지 URL' },
    title: { control: 'text', description: '노래 제목' },
    singer: { control: 'text', description: '가수 이름' },
  },
};

const Template = args => <MusicBar {...args} />;

export const Default = Template.bind({});
Default.args = {};
