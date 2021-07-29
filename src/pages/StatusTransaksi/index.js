import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  FlatList,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  RefreshControl,
  Button,
  ImageBackground
} from 'react-native';

import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import QRCode from 'react-native-qrcode-svg';


const StatusTransaksi = ({navigation}) =>{
  const [refreshing, setRefreshing] = React.useState(false)
  const [profile, setProfile] = useState([]);
  const [goldar, setGoldar] = useState([]);
  const [transaction, setTransaction] = useState([]);
  const [linkQR, setLinkQR] = useState([])

  function wait(timeout){
    return new Promise(resolve => {
      setTimeout(resolve, timeout)
    })
  }

  const getUser = async() =>{
    const value = await AsyncStorage.getItem('@storage_Key').then((info)=>{
      let infoUser = JSON.parse(info)
      let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            'Authorization': 'Bearer ' + infoUser.token
        }
      }
      const response = axios.get('http://192.168.100.5/donorinAPI/public/akundonor/'+infoUser.idAkun, axiosConfig)
      .then((response) =>{
        {response.data.map(item => {
          setProfile(item)
          goldarUser(item.idGoldar)
          //console.log(item.photo)
        })}
      }).catch(error => {
        console.log(error)
      })
    })
}

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
      const response = axios.get('http://192.168.100.5/donorinAPI/public/lastTransactionByIdAkun/'+infoUser.idAkun, axiosConfig)
      .then((response) =>{
        {response.data.map(item => {
            setTransaction(item)
            setLinkQR('http://192.168.100.5/donorinAPI/public/kuesioner/'+item.idKuesioner)
          })}
      }).catch(error => {
        console.log(error)
      })
    })
}

const goldarUser = (idGoldar) => {
  if(idGoldar == '1'){
      setGoldar('A +')
  }else if(idGoldar == '2'){
      setGoldar('B +')
  }else if(idGoldar == '3'){
      setGoldar('AB +')
  }else if(idGoldar == '4'){
      setGoldar('O +')
  }else if(idGoldar == '5'){
      setGoldar('A -')
  }else if(idGoldar == '6'){
      setGoldar('B -')
  }else if(idGoldar == '7'){
      setGoldar('AB -')
  }else if(idGoldar == '8'){
      setGoldar('O -')
  }else{
      setGoldar('Belum diketahui')
  }
}

const signOut = async() => {
    try {
      const value = await AsyncStorage.removeItem('@storage_Key');
      navigation.navigate('Login')
    }
    catch(exception) {
        console.log(exception)
    }
}

useEffect(() => {
  getUser()
  getTransaction()
  
}, [navigation]);

const onRefresh = React.useCallback(() => {
    getUser()
    goldarUser()
    wait(2000).then(()=>{
      setRefreshing(false)
    }).catch(function(error){
      console.log('Error: '+error.message)
    })
  }, [refreshing])


  return(
    <View style={styles.container}>
     <ImageBackground source={require('../../assets/background_login.png')} style={styles.page}>
        <Image source={require('../../assets/ethics.png')} style={{height:85, width:85, alignSelf:'center',marginBottom:10, marginTop:80,}}/>
        <Text style={{fontWeight:'bold', fontSize:26, color:'white', textAlign:'center', marginBottom:10,}}>Transaksi Berhasil</Text> 
        <Text style={{fontWeight:'800', fontSize:17, color:'white', textAlign:'center'}}>{transaction.keterangan}</Text> 
     </ImageBackground>
     <View style={styles.card}>
         <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:5,}}>
             <Text style={{fontWeight:'bold'}}>Nama Lengkap</Text>
             <Text>{profile.namaLengkap}</Text>
         </View>
         <View style={{flexDirection:'row', justifyContent:'space-between',marginBottom:5,}}>
            <Text style={{fontWeight:'bold'}}>Tanggal</Text>
             <Text>{transaction.tglTransaksi}</Text>
         </View>
         <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{fontWeight:'bold'}}>Status Transaksi</Text>
             <Text>{transaction.statusTransaksi}</Text>
         </View>
     </View>
     <View style={{alignSelf:'center',marginBottom:20, marginTop:70,}}>
     <QRCode 
      value={linkQR}
      size={200}
    />
     </View>
     
     {/* <Image source={require('../../assets/qrcode.jpg')} style={{height:200, width:200, alignSelf:'center',marginBottom:20, marginTop:70,}}/> */}
     <TouchableOpacity style={styles.accountBtn} onPress={()=>{navigation.replace('MainApp')
        }}>
            <Text style={styles.textAccountBtn}>Kembali ke Beranda</Text>
        </TouchableOpacity>
      {/* <ScrollView vertical={true} style={styles.content}>
      <View style={styles.header}>
          <View style={styles.circleImageProfile}>
              <Image style={styles.imageProfile} source={{uri:profile.profile}} />
          </View>
          <View style={{flexDirection:'row', alignSelf:'center'}}>
          <Text style={styles.headerTitle}>{profile.namaLengkap}</Text>
            <TouchableOpacity style={styles.editProfile} onPress={()=>navigation.navigate('UpdateAccount')}>
              <Text>Edit</Text>
            </TouchableOpacity>
          </View>
      </View>
      <View style={{width:'100%',flexDirection:'row',}}>
        <View style={styles.infoLayouts}>
          <Text style={styles.titleInfo}>Golongan Darah</Text>
          <Text>{goldar}</Text>
        </View>
        <View style={styles.infoLayouts}>
          <Text style={styles.titleInfo}>Total Donor</Text>
          <Text>0</Text>
        </View>
      </View>
      <View style={{width:'100%',flexDirection:'row',}}>
        <View style={styles.infoLayouts}>
          <Text style={styles.titleInfo}>Donor Terakhir pada</Text>
          <Text>-</Text>
        </View>
        <View style={styles.infoLayouts}>
          <Text style={styles.titleInfo}>Donor Kembali pada</Text>
          <Text>-</Text>
        </View>
      </View>
      <View style={styles.pertanyaanLayout}>
        <Text style={styles.titleInfo}>Ada Pertanyaan?</Text>
        <Text>Kami dapat menjawab pertanyaan anda melalui chat.</Text>
        <View style={styles.whatsappBtn}>
            <Image style={styles.imageWhatsapp} source={require('../../assets/whatsapp.png')} />
            <Text style={styles.textWhatsapp}>Whatsapp</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.accountBtn} onPress={signOut}>
        <Text style={styles.textAccountBtn}>Keluar</Text>
      </TouchableOpacity>
      <View style={{flexDirection:'row', alignSelf:'center', marginTop:20}}>
        <Image style={{alignSelf:'center', width:40, height:40,marginRight:10,}} source={require('../../assets/logo.png')} />
        <Text style={{textAlignVertical:'center', color:'#929292'}}>Donorin Version 1.0.0</Text>
      </View>
     
      </ScrollView>
       */}
      
      
  </View>
  )
}

export default StatusTransaksi;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },

    page:{
        width:'100%',
        height:420,
    },
    card:{
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#F3F3F3',
        borderBottomWidth: 2,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 10,
        alignSelf:'center',
        width:'90%',
        padding:20,
        elevation:2,
        backgroundColor:'white',
        marginTop:-145
    },
    content:{
      backgroundColor:'white',
      elevation:2,
      height:'100%',
    },
    header:{
      color: 'white',
      padding: 20,
      paddingTop:55,
      
  
    },
    headerTitle:{
        fontSize:22,
        fontWeight: '500',
        alignSelf:'center',
        height:40,
      },
    imageProfile:{
        width:100,
        height:100,
        borderRadius:100,
        alignSelf:'center',
        marginTop:0,
    },
    circleImageProfile:{
        padding:2,
        alignSelf:'center',
        marginBottom:10,
        borderRadius:100,
        backgroundColor:'#EEEBDD',
    },
    editProfile:{
      alignSelf:'center',
      borderWidth: 1,
      borderRadius: 15,
      borderColor: '#F3F3F3',
      borderBottomWidth: 2,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.9,
      shadowRadius: 10,
      flexDirection:'row',
      alignSelf:'center',
      paddingHorizontal:10,
      paddingVertical:2,
      backgroundColor:'white',
      marginLeft:10,
    },
    infoLayouts:{
      width:'50%',
      borderWidth: 0.5,
      borderColor: '#F3F3F3',
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.9,
      shadowRadius: 10,
      padding:20,
    },
    titleInfo:{
      fontWeight:'bold',
      marginBottom:10,
    },
    pertanyaanLayout:{
      backgroundColor:'#F3F3F3',
      padding:20,
    },
    whatsappBtn:{
      alignSelf:'center',
      borderWidth: 1,
      borderRadius: 15,
      borderColor: '#F3F3F3',
      borderBottomWidth: 2,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.9,
      shadowRadius: 10,
      flexDirection:'row',
      alignSelf:'center',
      paddingHorizontal:10,
      paddingVertical:5,
      backgroundColor:'#40C351',
      marginLeft:10,
      marginTop:20,
    },
    imageWhatsapp:{
      width:30,
      height:30,
      marginRight:10,
    },
    textWhatsapp:{
      marginTop:0,
      color:'white',
      fontWeight:'bold',
      textAlignVertical:'center'
    },
    accountBtn:{
      alignSelf:'center',
      borderWidth: 1,
      borderRadius: 10,
      borderColor: '#F3F3F3',
      borderBottomWidth: 2,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.9,
      shadowRadius: 10,
      flexDirection:'row',
      alignSelf:'center',
      padding:10,
      marginTop:20,
      width:'90%',
      backgroundColor:'#F05454',
      elevation:2,
    },
    textAccountBtn:{
      fontWeight:'bold',
      textAlign:'center',
      width:'100%',
      color:'white'
    },
  });