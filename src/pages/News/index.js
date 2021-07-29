import React, { useState, useEffect,} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  FlatList,
  ScrollView,
  Dimensions,
  RefreshControl,
  TouchableOpacity
} from 'react-native';
import { color } from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

const News = ({navigation}) => {

  function wait(timeout){
  return new Promise(resolve => {
    setTimeout(resolve, timeout)
  })
}

  const [refreshing, setRefreshing] = React.useState(false)
  const onRefresh = React.useCallback(() => {
    setRefreshing(true)
    getBerita()
    wait(2000).then(()=>{
      setRefreshing(false)
    }).catch(function(error){
      console.log('Error: '+error.message)
    })
  }, [refreshing])

  const [berita, setBerita] = useState([])

    const getBerita = async() =>{
        const value = await AsyncStorage.getItem('@storage_Key').then((info)=>{
          let infoUser = JSON.parse(info)
          let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                'Authorization': 'Bearer ' + infoUser.token
            }
          }
          const response = axios.get('http://192.168.100.5/donorinAPI/public/artikel', axiosConfig)
          .then((response) =>{
            setBerita(response.data)
            console.log('Berhasil mendapatkan berita: '+response)
          }).catch(error => {
            console.log(error)
          })
          // console.log(infoUser.token)
        })    
    }

    useEffect(() => {
        getBerita()
    }, [navigation])

  return(
    <View style={styles.container}>
      
      <LinearGradient colors={['#D32A2A', '#CE1212']}  style={styles.headerRegister}>
          <Text style={{paddingHorizontal:20, position:'absolute', bottom:15, fontSize:22, fontWeight:'bold', color:'white'}}>Berita</Text>
      </LinearGradient>
      <ScrollView vertical={true} style={styles.content} refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
        {
          berita.map((item, index) =>{
            return(
              <TouchableOpacity style={styles.headline} key={item.idArtikel} 
                onPress={()=>{
                  navigation.navigate('Browser', item)
                }}
              >
                  <Image style={styles.coverHeadline} source={{uri:item.gambarArtikel}}/>
                  <Text style={styles.titleHeadline}>{item.judulArtikel}</Text>
                  <Text style={styles.ketHeadline}> by Posko PMI Kabupaten Bogor |  posted in: PMI |  {item.tglRilis}</Text>
              </TouchableOpacity>
            )
          })
        }
          
      </ScrollView>
      
  </View>
  )

}

export default News;


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
      paddingTop: 45,
  
    },
    headerTitle:{
      color: 'white',
      fontSize:22,
      fontWeight: 'bold',
      alignSelf:'center',
  
    },
    headerProfile:{
      width:40,
      height:40,
      borderRadius: 40/2,
  
    },
  
    content:{
      backgroundColor:'white',
      elevation:2,
      height:'100%',
    },
    welcomeText:{
      fontSize:14,
      paddingLeft:20,
      paddingTop:20,
  
    },
    hisoryContainer:{
      borderWidth: 1,
      borderRadius: 15,
      borderColor: '#EEEBDD',
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
  
    stokDarahView:{
      borderWidth: 1,
      borderRadius: 15,
      borderColor: '#F3F3F3',
      borderBottomWidth: 2,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.9,
      shadowRadius: 10,
      alignSelf:'center',
      width:150,
      height:150,
      marginTop:15,
      marginRight:20,
    },
    textGoldarView:{
      backgroundColor:'#D32A2A',
      height:30,
      textAlign:'center', 
      width:'100%',
      color:'white',
      borderTopLeftRadius:15,
      borderTopRightRadius:15,
      paddingTop:5,
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
  
    headline:{
        width:'100%',
        borderColor: '#F3F3F3',
        borderBottomWidth: 2,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 10,
        alignSelf:'center',
    },

    coverHeadline:{
      height: 200,
      width:'100%',
      alignSelf:'center',
      opacity:0.9,
      padding:20,

    },

    titleHeadline:{
        marginLeft:20,
        marginRight:20,
        marginTop:10,
        fontSize:15,
        fontWeight:'bold'
    },
    ketHeadline:{
        marginLeft:20,
        marginRight:20,
        marginTop:5,
        marginBottom:15,
        fontSize:10,
        fontWeight:'bold',
        color:'#929292'
    },
    headerRegister:{
      height:85,
  },

  
  
  
  
  });
  