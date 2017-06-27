import React from 'react';
import { render } from 'react-dom';
import Profile from './Profile';


const props = {
  name: 'wanggang',
  age: 20
};
render(<Profile {...props} />, document.getElementById("root"));
