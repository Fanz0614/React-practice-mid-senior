import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './Pages/home/home';
import { List } from './Pages/list/list';
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/list" component={List} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
