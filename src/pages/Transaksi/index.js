import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, StatusBar, ScrollView, TextInput, ImageBackground, Button, SafeAreaView, TouchableOpacity, Modal, Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useForm} from '../../utils';
var ImagePicker = require('react-native-image-picker');


import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';



const Transaksi = ({navigation}) => {

    const [transaction, setTransaction] = useState([])

    const getTransaction = async() =>{
        const value = await AsyncStorage.getItem('@storage_Key').then((info)=>{
          let infoUser = JSON.parse(info)
          let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                'Authorization': 'Bearer ' + infoUser.token
            }
          }
          const response = axios.get('http://192.168.100.5/donorinAPI/public/allTransaksi/'+infoUser.idAkun, axiosConfig)
          .then((response) =>{
            setTransaction(response.data)
            console.log('Berhasil mendapatkan user: '+response)
          }).catch(error => {
            console.log(error)
          })
          // console.log(infoUser.token)
        })    
    }

    useEffect(() => {
        getTransaction()
    }, [navigation])

    return(
        <SafeAreaView style={styles.container}>
            <LinearGradient colors={['#D32A2A', '#CE1212']}  style={styles.headerRegister}>
                <Text style={{paddingHorizontal:20, position:'absolute', bottom:15, fontSize:22, fontWeight:'bold', color:'white'}}>Daftar Transaksi</Text>
            </LinearGradient>
            {
                transaction.map((item, index)=>{
                    return(
                        <TouchableOpacity style={styles.card} key={index} onPress={() =>{
                            navigation.navigate('LihatTransaksi', item)
                        }}>
                        {
                            item.statusTransaksi === 'On Progress' ?
                            (<Image source={require('../../assets/on-time.png')} style={{width:40, height:40,}}/>) : 
                            (<Image source={require('../../assets/check.png')} style={{width:40, height:40,}}/>)
                        }
                            <View style={{marginStart:20, }}>
                            <Text style={{fontSize:17, fontWeight:'bold'}}>Transaksi #{item.idTransaksi}</Text>
                            <Text style={{fontSize:13,}}>{item.tglTransaksi}, {item.statusTransaksi}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })
            }
        </SafeAreaView>
    )
}

export default Transaksi;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F3F3',
      },
      headerRegister:{
        height:85,
    },card:{
        borderWidth: 1,
        borderColor: '#F3F3F3',
        borderBottomWidth: 2,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 10,
        alignSelf:'center',
        width:'100%',
        padding:20,
        paddingVertical:15,
        elevation:2,
        backgroundColor:'white',
        flexDirection:'row',
        
    },
})