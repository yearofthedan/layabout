import React from "react";
import { configure, addDecorator } from '@storybook/react';
import {withInfo} from '@storybook/addon-info';

addDecorator(withInfo);

const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
