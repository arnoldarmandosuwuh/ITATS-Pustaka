import React, { Component } from 'react';
import {AppRegistry,View,Image} from 'react-native';
import SplashScreen from './Splash';
import Sidebar from './components/Sidebar';

export default class ITATSPustaka extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        timePassed: false,
    };
  }
  componentDidMount() {
    setTimeout( () => {
      this.setState({timePassed: true})
    },3000);
  }

  render() {
    if (!this.state.timePassed) {
      return <SplashScreen/>;
    } else {
      return <Sidebar />
    }
  }
}

AppRegistry.registerComponent('ITATSPustaka', () => ITATSPustaka);
