/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';

import Routes from './config/routes'

export default class Home extends Component {
  render() {
    return (
      <Routes />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header:{
    color: 'white',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#8E1A1A',


  },
  headerTitle:{
    color: 'white',
    fontSize:22,
    fontWeight: 'bold',
    alignSelf:'center',
    marginBottom:10,

  },
  headerProfile:{
    width:40,
    height:40,
    borderRadius: 40/2,
    marginBottom:10,

  },

  content:{
    marginTop:-12,
    borderTopLeftRadius:15,
    borderTopEndRadius:15,
    backgroundColor:'white',
    elevation:2,
    height:'100%',
  },


});
