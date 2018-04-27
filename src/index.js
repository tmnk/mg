import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
import Tasks from './components/Tasks'
import {articles} from './fixtures'

// render(<App articles = {articles} />, document.getElementById('list'))	;
// 	debugger;
render(<App />, document.getElementById('list'));
