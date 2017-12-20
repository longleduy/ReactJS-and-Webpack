//TODO : Module
import ReactDOM from 'react-dom';
import React from 'react';
import {JobManager} from './JobManager';
// TODO : Bootstrap 3
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery';
// TODO : Css
import '../../public/stylesheet/cssJobManager.css';

ReactDOM.render(<JobManager/>,document.querySelector('#root'));
