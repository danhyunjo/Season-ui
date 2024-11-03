module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@chromatic-com/storybook',
  ],

  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};
