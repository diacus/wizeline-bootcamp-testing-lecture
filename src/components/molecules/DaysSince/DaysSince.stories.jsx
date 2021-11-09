import React from 'react';

import DaysSince from './DaysSince';

export default {
  title: 'Molecules/DaysSince',
  component: DaysSince,
};

const Template = (args) => <DaysSince {...args} />;

export const Default = Template.bind({});
Default.args = {};
