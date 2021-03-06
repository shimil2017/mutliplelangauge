
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, ScrollView, View } from 'react-native';
import First from './First'
import Second from './Second'
import TabNavigator from 'react-native-tab-navigator';

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';

import store from './store.js';
export default class App extends Component{

  constructor(props){
    super(props)
    this.state={
      selectedTab:'home'
    }
  }
  render(){
    console.log(store.getState(),"store")
    return(

<Provider store={store}>
      <TabNavigator>
  <TabNavigator.Item
    selected={this.state.selectedTab === 'home'}
    title="Home"
   
    badgeText="1"
    onPress={() => this.setState({ selectedTab: 'home' })}>
    <First/>
  </TabNavigator.Item>
  <TabNavigator.Item
    selected={this.state.selectedTab === 'profile'}
    title="Profile"
    
     onPress={() => this.setState({ selectedTab: 'profile' })}>
    <Second/>
  </TabNavigator.Item>
</TabNavigator>
</Provider>
    )
  }
}