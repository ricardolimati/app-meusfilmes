import React from 'react';
import {View} from 'react-native';

import { isSignedIn} from "./services/auth";

import { createRootNavigator, SignedOutRoutes, SignedInRoutes} from './routes';

export default class App extends React.Component{
  state = {
    signed: false,
    signLoaded: false,
  };

  componentWillMount(){
    isSignedIn()
    .then(res=> this.state({signed: res, signLoaded: true}))
    .catch(err=> alert("Erro"));
  }

  render(){
    const {signLoaded, signed} = this.state;

    if(!signLoaded){
      return null;
    }

    const Layout = createRootNavigator(signed);
    return <Layout />;
  }
};

//import React from 'react';
//import Routes from './routes';
//import './config/StatusBarConfig';
//const App = () => <Routes/>

//export default App;