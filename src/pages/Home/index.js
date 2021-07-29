/* @flow */
import React, {useEffect, useState, useRef} from 'react';
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
  SafeAreaView,
  Easing,
} from 'react-native';


import {
  HeaderHome,
  Greeting,
  StockDarah,
  Faq,
} from '../../components';


import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';


function wait(timeout){
  return new Promise(resolve => {
    setTimeout(resolve, timeout)
  })
}




const Home = ({navigation}) =>{
  
  const [refreshing, setRefreshing] = React.useState(false)
  const [faqHideShow, setFaqHideShow] = useState(false)
  const [stokDarah, setStokDarah] = useState([])
  const [faq, setFaq] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [faqImage, setFaqImage] = useState([])
  const [profile, setProfile] = useState([]);

  const getStockData = React.useCallback(()=>{
    fetch('http://192.168.100.5/donorinAPI/public/stokdarah')
      .then((response) => response.json())
      .then((json) => setStokDarah(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [])

  const getFaqData = React.useCallback(()=>{
    fetch('http://192.168.100.5/donorinAPI/public/faq')
      .then((response) => response.json())
      .then((json) => {
          setFaq(json)

      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [faq])

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
        //setProfile(response.data.)
        // setCategoryKecamatan(response.data.data)
        //console.log(response.data.data)
        setProfile(response.data)
        //console.log('Berhasil mendapatkan user: '+response)
      }).catch(error => {
        console.log(error)
      })
      // console.log(infoUser.token)
      


    })
    
    // };
    // axios.post('http://192.168.100.5/donorinAPI/public/login', form, axiosConfig)
    //   .then((res3) =>{
    //       //console.log('berhasil login '+res3.data.message)
    //       var items = {}
    //       items.idAkun = res3.data.idAkun
    //       items.token = res3.data.token
    //       AsyncStorage.setItem('@storage_Key', JSON.stringify(items));
    //       navigation.navigate('MainApp')
    //   }).catch((error3) =>{
    //       console.log(error3)
    //   })
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true)
    getStockData()
    getFaqData()
    getUser()
    wait(2000).then(()=>{
      setRefreshing(false)
    }).catch(function(error){
      console.log('Error: '+error.message)
    })
  }, [refreshing])


  useEffect(() => {
    getStockData()
    getFaqData()
    getUser()
  },[]);




  return(
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} barStyle='dark-content' backgroundColor='transparent'/>
      {profile.map((item, index) => {
              return(
                <HeaderHome 
                key={index}
                profile={item.profile}
                />
              )
            })}
      {/* <HeaderHome /> */}
      <ScrollView vertical={true} showsVerticalScrollIndicator={false} style={styles.content} refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
        {profile.map((item, index) => {
              return(
                <Greeting 
                key={index}
                namaLengkap={item.namaLengkap}
                jnsKelamin={item.jnsKelamin}
                />
              )
            })}
        <TouchableOpacity activeOpacity={0.5} style={styles.hisoryContainer} onPress={()=> navigation.navigate('Transaksi')}>
          <Image style={styles.imageTransaction} source={require('../../assets/history.png')}/>
          <Text style={styles.textTransaction}>Riwayat Transaksi</Text>
          <Image style={styles.imageTransaction} source={require('../../assets/arrow_right.png')}/>
        </TouchableOpacity>
        <Text style={{marginTop:15,fontWeight:'bold',fontSize:17,marginLeft:20, marginTop:20,}}>Stok Darah</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginLeft:20,marginTop:5,}}>
          
            {stokDarah.map((item, index) => {
              return(
                <StockDarah 
                key={index}
                namaGoldar={item.golonganDarah+' '+item.rhesusGoldar}
                stokDarah={item.stokDarah}
                />
              )
            })}
        </ScrollView>
        <Text style={{marginTop:15,fontWeight:'bold', fontSize:17, marginLeft:20,marginTop:30,}}>Frequency Ask Questions</Text>
        <Text style={{marginTop:5, fontSize:14, width:'80%',color:'#929292', marginLeft:20,lineHeight:20, fontWeight:'bold', opacity:0.5,marginBottom:20,}}>Pertanyaan yang sering ditanyakan masyarakat mengenai donor darah</Text>
        <Image style={styles.coverFaq} source={require('../../assets/faq.jpg')}/>
        {faq.map(item => {
              return(
                <Faq 
                key={item.idFaq}
                icon={item.icon}
                judulFaq={item.judulFaq}
                kontenFaq={item.kontenFaq}
                />
              )
            })}
        
      </ScrollView>
      <TouchableOpacity activeOpacity={0.5} style={styles.TouchableOpacityStyle} onPress={()=>{navigation.navigate('Kuesioner')}}>
          <Image source={require('../../assets/donor.png')} style={styles.FloatingButtonStyle} />
        </TouchableOpacity>
      
        {/* <StatusBar translucent={true} barStyle='dark-content' backgroundColor='transparent'/>
        
        <ScrollView vertical={true} showsVerticalScrollIndicator={false} style={styles.content}>
            
            
              
              <TouchableOpacity activeOpacity={0.5} onPress={this.SampleFunction} style={styles.faqView}>
                <Text style={{marginLeft:20,marginRight:20,textAlign:'justify', fontWeight:'bold',width:'72%'}}>Q1. Donor Darah Bisa Menurunkan Berat Badan?</Text>
                <Image style={styles.imageTransaction} source={require('../../assets/arrow_down.png')}/>
              </TouchableOpacity>
        </ScrollView>
        <TouchableOpacity activeOpacity={0.5} onPress={this.SampleFunction} style={styles.TouchableOpacityStyle} >

          <Image source={require('../../assets/donor.png')} style={styles.FloatingButtonStyle} />
        </TouchableOpacity> */}
        
        
        
      </SafeAreaView>
  )
}


export default Home;
// export default class Home extends Component {
  
//   render() {
//     const [shouldShow, setshouldShow] = useState(true);
//     return (
//       <View style={styles.container}>
//         <StatusBar translucent={true} barStyle='dark-content' backgroundColor='transparent'/>
//         <View style={styles.header}>
//           <Text style={styles.headerTitle}>Donorin</Text>
//           <Image style={styles.headerProfile} source={require('../../assets/person.jpg')} />
//         </View>
//         <ScrollView vertical={true} showsVerticalScrollIndicator={false} style={styles.content}>
//             <Text style={styles.welcomeText}>Selamat Pagi, Bapak</Text>
//             <Text style={{marginBottom:20, fontSize:25, fontWeight:'bold', paddingLeft:20,}}>Muhammad Faris</Text>
//             <TouchableOpacity activeOpacity={0.5} onPress={this.SampleFunction} style={styles.hisoryContainer}>
//               <Image style={styles.imageTransaction} source={require('../../assets/history.png')}/>
//               <Text style={styles.textTransaction}>Riwayat Donor Darah</Text>
//               <Image style={styles.imageTransaction} source={require('../../assets/arrow_right.png')}/>
//             </TouchableOpacity>
//             <Text style={{marginTop:15,fontWeight:'bold',fontSize:17,marginLeft:20, marginTop:20,}}>Stok Darah</Text>
//             <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginLeft:20,marginTop:5,}}>
//                 <View style={styles.stokDarahView}>
//                 <Text style={styles.textGoldarView}>Goldar A Positif</Text>
//                   <View style={{width:'100%', fontWeight:'bold', height:'100%', marginTop:15}}>
//                     <Text style={{width:'100%', textAlign:'center', fontWeight:'bold', fontSize:36,}}>1.2rb</Text>
//                     <Text style={{width:'80%', alignSelf:'center', textAlign:'center', fontWeight:'bold',fontSize:15,}}>Kantong Darah</Text>
//                   </View>
//                 </View>
//                 <View style={styles.stokDarahView}>
//                   <Text style={styles.textGoldarView}>Goldar B Positif</Text>
//                   <View style={{width:'100%', fontWeight:'bold', height:'100%', marginTop:15}}>
//                     <Text style={{width:'100%', textAlign:'center', fontWeight:'bold', fontSize:36,}}>1.2rb</Text>
//                     <Text style={{width:'80%', alignSelf:'center', textAlign:'center', fontWeight:'bold',fontSize:15,}}>Kantong Darah</Text>
//                   </View>
//                 </View>
//                 <View style={styles.stokDarahView}>
//                   <Text style={styles.textGoldarView}>Goldar B Positif</Text>
//                   <View style={{width:'100%', fontWeight:'bold', height:'100%', marginTop:15}}>
//                     <Text style={{width:'100%', textAlign:'center', fontWeight:'bold', fontSize:36,}}>1.2rb</Text>
//                     <Text style={{width:'80%', alignSelf:'center', textAlign:'center', fontWeight:'bold',fontSize:15,}}>Kantong Darah</Text>
//                   </View>
//                 </View>
//                 <View style={styles.stokDarahView}>
//                   <Text style={styles.textGoldarView}>Goldar B Positif</Text>
//                   <View style={{width:'100%', fontWeight:'bold', height:'100%', marginTop:15}}>
//                     <Text style={{width:'100%', textAlign:'center', fontWeight:'bold', fontSize:36,}}>1.2rb</Text>
//                     <Text style={{width:'80%', alignSelf:'center', textAlign:'center', fontWeight:'bold',fontSize:15,}}>Kantong Darah</Text>
//                   </View>
//                 </View>
//                 <View style={styles.stokDarahView}>
//                   <Text style={styles.textGoldarView}>Goldar B Positif</Text>
//                   <View style={{width:'100%', fontWeight:'bold', height:'100%', marginTop:15}}>
//                     <Text style={{width:'100%', textAlign:'center', fontWeight:'bold', fontSize:36,}}>1.2rb</Text>
//                     <Text style={{width:'80%', alignSelf:'center', textAlign:'center', fontWeight:'bold',fontSize:15,}}>Kantong Darah</Text>
//                   </View>
//                 </View>
//               </ScrollView>
//               <Text style={{marginTop:15,fontWeight:'bold', fontSize:17, marginLeft:20,marginTop:30,}}>Frequency Ask Questions</Text>
//               <Text style={{marginTop:5, fontSize:14, width:'80%',color:'#929292', marginLeft:20,lineHeight:20, fontWeight:'bold', opacity:0.5,marginBottom:20,}}>Pertanyaan yang sering ditanyakan masyarakat mengenai donor darah</Text>
//               <Image style={styles.coverFaq} source={require('../../assets/faq.jpg')}/>
//               <TouchableOpacity activeOpacity={0.5} onPress={this.SampleFunction} style={styles.faqView}>
//                 <Text style={{marginLeft:20,marginRight:20,textAlign:'justify', fontWeight:'bold',width:'72%'}}>Q1. Donor Darah Bisa Menurunkan Berat Badan?</Text>
//                 <Image style={styles.imageTransaction} source={require('../../assets/arrow_down.png')}/>
//               </TouchableOpacity>
//         </ScrollView>
        
        
        
        
//       </View>
      
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  

  content:{
    marginTop:-12,
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    backgroundColor:'white',
    elevation:2,  
  },
 
  hisoryContainer:{
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
    padding:5,
    width:'90%',
    marginLeft:'5%',
    marginRight:'5%',
  },
  imageTransaction:{
    height:25,
    width:25,
    marginLeft:15,
    marginRight:10,
    marginTop:8,
  },
  
  textTransaction:{
    height:30,
    marginLeft:10,
    marginRight:15,
    marginTop:10,
    fontWeight:'bold',
    width:'58%'
  },

  
  faqView:{
    borderWidth: 1,
    borderColor: '#F3F3F3',
    borderBottomWidth: 2,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    flexDirection:'row',
    alignSelf:'center',
    padding:5,
    width:'100%',
    paddingTop:15,
    paddingBottom:15,
  },

  coverFaq:{
    height: 300,
    width:'90%',
    alignSelf:'center',
  },
  TouchableOpacityStyle:{
  
    position: 'absolute',
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    top: 530,
    elevation:3,
    padding:10,
    backgroundColor:'white',
    borderRadius:50,
  },
 
  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 110,
    height:110,
  }




});
