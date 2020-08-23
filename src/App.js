import React, { useEffect, useState } from 'react';
import './assets/css/base.css';
import { Provider } from 'react-redux';
import Sidebar from './components/layouts/Sidebar';
import ContextProvider from './contexts';
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

export const MainComponent = () => {
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem('gallery-access-token');
    if (token) {
      const time = new Date().getTime();
      const exp = localStorage.getItem('gallery-token-exp') * 1000;
      if (time > exp) {
        localStorage.removeItem('gallery-access-token');
        localStorage.removeItem('gallery-token-exp');
        localStorage.removeItem('gallery-user-data');
        history.replace('/login');
      }
    } else {
      history.replace('/login');
    }
  }, [history]);
  return (
    <Sidebar>
      <Route exact path={process.env.PUBLIC_URL + '/'} component={Dashboard} />
    </Sidebar>
  );
};

const App = ({ store }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width]);

  return (
    <Provider store={store}>
      <ContextProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact component={MainComponent} />
          </Switch>
        </BrowserRouter>
      </ContextProvider>
    </Provider>
  );
};

export default App;
