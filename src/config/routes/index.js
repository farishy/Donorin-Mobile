import React from 'react'
import {Text, View, Image} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {Home, News, Event, Account, Splash, Login, Register, UpdateAccount, Kuesioner, StatusTransaksi, Transaksi, LihatTransaksi, Browser} from '../../pages'

const Stack = createStackNavigator();
const MaterialBottom = createMaterialBottomTabNavigator();

const MainApp = () => {
    return(
        <MaterialBottom.Navigator
            shifting={true}
            activeColor='#8E1A1A'
            barStyle={{ backgroundColor: 'white' }}
        >
            <MaterialBottom.Screen name='Beranda' component={Home}
                options={{
                    tabBarLavel: 'Beranda',
                    tabBarIcon: ({color}) => (
                        <View>
                        {
                            color == '#8E1A1A' ?
                            <Image source={require('../../assets/home_active.png')} style={{height:27.5,width:27.5}} />
                                :
                              <Image source={require('../../assets/home.png')} style={{height:27.5,width:27.5}} />
                       }
                        </View>
                    )
                }}
            /> 
            <MaterialBottom.Screen name='Berita' component={News}
                options={{
                    tabBarIcon: ({color}) => (
                        <View>
                        {
                            color == '#8E1A1A' ?
                                <Image source={require('../../assets/news_active.png')} style={{height:27.5,width:27.5}} />
                                    :
                                <Image source={require('../../assets/news.png')} style={{height:27.5,width:27.5}} />
                        }
                        </View>
                    )
                }}
            /> 
            <MaterialBottom.Screen name='Agenda' component={Event}
                options={{
                tabBarIcon: ({color}) => (
                    <View>
                    {
                        color == '#8E1A1A' ?
                            <Image source={require('../../assets/event_active.png')} style={{height:27.5,width:27.5}} />
                        :
                            <Image source={require('../../assets/event.png')} style={{height:27.5,width:27.5}} />
                    }
                    </View>
                )
                }}
            /> 
            <MaterialBottom.Screen name='Akun' component={Account}
                options={{
                    tabBarIcon: ({color}) => (
                        <View>
                        {
                            color == '#8E1A1A' ?
                                <Image source={require('../../assets/person_active.png')} style={{height:27.5,width:27.5}} />
                            :
                                <Image source={require('../../assets/person.png')} style={{height:27.5,width:27.5}} />
                        }
                        </View>
                    )
                }}
            /> 
        </MaterialBottom.Navigator>
        
    )
}

const Router = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen
                    name="Splash"
                    component={Splash}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Register"
                    component={Register}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="MainApp"
                    component={MainApp}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="UpdateAccount"
                    component={UpdateAccount}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Kuesioner"
                    component={Kuesioner}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="StatusTransaksi"
                    component={StatusTransaksi}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Transaksi"
                    component={Transaksi}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="LihatTransaksi"
                    component={LihatTransaksi}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Browser"
                    component={Browser}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
    
}

export default Router;
