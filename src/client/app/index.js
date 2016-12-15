import React from 'react';
import {render} from 'react-dom';

//import GistBox from './GistBox';
var GistBox = require('./GistBox');

render(<GistBox/>, document.querySelector("#app"));