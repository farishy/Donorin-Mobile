import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}) => {
  const unsubscribe =  async() => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key')
      if(value !== null) {
        navigation.navigate('MainApp')
      }else{
        navigation.navigate('Login')
      }
    } catch(e) {
      // error reading value
      console.warn(e)
    }
  }

  useEffect(()=>{
    setTimeout(() => {
      unsubscribe()
    }, 3000);
    return () => unsubscribe();
  }, [navigation]);
  

    return (
        <View style={styles.container}>
            <StatusBar translucent={true} barStyle='dark-content' backgroundColor='transparent'/>
            <View style={styles.splashLayout}>
            <Image style={styles.imageSplash} source={require('../../assets/pemkab_bogor.png')} />
            </View>
        </View>
    )
}

export default Splash;

const styles = StyleSheet.create({
  container: {
        flex: 1,
        backgroundColor: 'white',
  },
  splashLayout: {
    width:'100%',
    height:'100%',
    justifyContent:'center'
  },
  imageSplash: {
    width:200,
    height:200,
    alignSelf:'center'
    
  },
});
