import React from 'react';
import LoginTab from './loginForm'
import './App.css';
import {Switch,Route} from 'react-router-dom'
import EmployeeData from './empData'
function App() {

  return (
     <div>
      <Switch>
        <Route exact path='/' component={LoginTab} />
        <Route exact path='/empData' component={EmployeeData} />
      </Switch>
    </div>
  );
}

export default App;
