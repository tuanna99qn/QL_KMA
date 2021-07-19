import React, { useEffect } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';
import {requestClass, mapToNav} from './containers/_nav'
import {useGlobalState} from "./logical/glocalState";
import ClassA from './views/subject/classA';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));
const Class = React.lazy(()=>import('./views/subject/classA/index'))
// cho dung function cho class vay


const App = () => {
  let [,setNav] = useGlobalState(global.navigationState)
  useEffect(()=>{
    requestClass().then(m=>{
      let nav = mapToNav(m.data)
      console.log('cai nay la data menu ne thang ngu: ',nav)
      setNav(nav)
     
    }).catch(e=>{
      console.log(e)
    });
  },[])
    return (
      <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
}

export default App;
