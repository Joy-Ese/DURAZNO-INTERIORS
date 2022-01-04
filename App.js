import React, { useState } from 'react';

import HomeScreen from './app/components/HomeScreen';
import WelcomeScreen from './app/components/WelcomeScreen';
import LoginScreen from './app/components/LoginScreen';
import RegisterScreen from './app/components/RegisterScreen';


import ItemScreen from './app/components/ItemScreen';
import AddToCart from './app/components/AddToCart';
import LogOut from './app/components/LogOut';

import SofaScreen from './app/components/SofaScreen';
import TableScreen from './app/components/TableScreen';
import LampScreen from './app/components/LampScreen';

import {Router, Stack, Scene} from "react-native-router-flux"

export default function App() {
  return (
    <Router>
    <Stack key="root">
      {/* tabs navigator */}
      <Scene 
        key="mytab"
        headerShown={false}
        tabs
        tabBarStyle={{ backgroundColor: "cream" }}
      >
        <Scene key="joy" title="JOY">
          <Scene key="items" component={ItemScreen} title="Items"/>
        </Scene>

        <Scene key="ken" title="KEN">
        <Scene key="carts" component={AddToCart} title="Cart"/>
        </Scene>

        <Scene key="mm" title="MM">
        <Scene key="logout" component={LogOut} title="LogOut"/>
        </Scene>
      </Scene>
      {/* end of tabs navigator */}

      <Scene 
        key="home" 
        component={HomeScreen} 
        initial
        title="Home" 
        headerShown={false}
      />
      <Scene key="register" headerShown={false} component={RegisterScreen} title="Register" />
      <Scene key="welcome" headerShown={false} component={WelcomeScreen} />
      <Scene key="login" headerShown={false} component={LoginScreen} />
      <Scene key="sofas" headerShown={false} component={SofaScreen} />
      <Scene key="tables" headerShown={false} component={TableScreen} />
      <Scene key="lamps" headerShown={false} component={LampScreen} />
    </Stack>
  </Router>
  ); 
}
