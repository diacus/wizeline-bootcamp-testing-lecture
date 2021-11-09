import React from 'react';
import { action } from '@storybook/addon-actions';

import InputNumber from './InputNumber';

export default {
  title: 'Molecules/InputNumber',
  component: InputNumber,
};

const Template = (args) => <InputNumber {...args} />;

export const Default = Template.bind({});
Default.args = {
  number: 5,
  onChange: action('On Change'),
};
