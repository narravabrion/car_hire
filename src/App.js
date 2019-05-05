import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone, faClock } from '@fortawesome/free-solid-svg-icons'

import Dashboard from './components/dashboard/index'
import CreateProjects from './components/createProject/createProject'
import Login from './components/login/index'
import Profile from './components/profile/index'
import ProjectDetail from './components/project/ProjectDetail'
import Home from './components/home/index'
import './App.scss';

library.add(faPhone)
library.add(faClock)

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/project/:id' component={ProjectDetail} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/login' component={Login} />
        <Route path='/profile' component={Profile} />
        <Route path='/add-new-car' component={CreateProjects} />
      </Switch>
    );
  }
}

export default App;
