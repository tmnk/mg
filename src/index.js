import React from 'react'
import {render} from 'react-dom'
import Login from './components/Login'
import {articles} from './fixtures'

// render(<App articles = {articles} />, document.getElementById('list'))	;
// 	debugger;
render(<Login />, document.getElementById('list'));
