import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, StatusBar, ScrollView, TextInput, ImageBackground, Button, SafeAreaView, TouchableOpacity, Modal, Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useForm} from '../../utils';
var ImagePicker = require('react-native-image-picker');

import DateTimePickerModal from "react-native-modal-datetime-picker";
import CheckBox from '@react-native-community/checkbox';
import AwesomeAlert from 'react-native-awesome-alerts';

import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';


const UpdateAccount = ({navigation}) => {

    
  const [showAlert2, setShowAlert2] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
    const [profile, setProfile] = useState([]);
    const [photo, setPhoto] = useState();
    const [validation, setValidation] = useForm({
        cekNamaLengkap: '',
        cekAlamat: '',
        cekNoTelepon: '',
      })


    const updateUser = async() =>{
        const value = await AsyncStorage.getItem('@storage_Key').then((info)=>{
            let infoUser = JSON.parse(info)
            let axiosConfig = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    'Authorization': 'Bearer ' + infoUser.token
                }
            }
            //console.log(profile)
            profile.profile = photo
            //console.log(profile.photo)
            const response = axios.put('http://192.168.100.5/donorinAPI/public/akundonor/'+infoUser.idAkun, profile, axiosConfig)
            .then((response) =>{
            //   console.log('berhasil update')
                //console.log(response)
                navigation.replace('MainApp')
            }).catch(error => {
              console.log(error)
            })
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
              setPhoto(item.profile)
            })}
          }).catch(error => {
            console.log(error)
          })
        })
    }

    const cekValidNama = () => {
        if (profile.namaLengkap.length < 1) {
          setValidation('cekNamaLengkap','*Nama tidak boleh kosong')
        }
        else if(validation.cekNamaLengkap.length >0){
          setValidation('cekNamaLengkap','')
        }
      }

    
      const cekValidAlamat = () => {
        if (profile.alamat.length < 1) {
          setValidation('cekAlamat','*Alamat tidak boleh kosong')
        }
        else if(validation.cekAlamat.length >0){
          setValidation('cekAlamat','')
        }
      }
    
      const cekValidNoTelepon = () => {
        const regexTlp = new RegExp(/^(0|08|08[0-9]{6,12})$/)
        if (profile.noTelepon.length < 1) {
          setValidation('cekNoTelepon','*Nomor telepon tidak boleh kosong')
        }else if(regexTlp.test(profile.noTelepon) === false){
            setValidation('cekNoTelepon','*Nomor telepon yang anda masukkan tidak valid')
        }
        else if(validation.cekNoTelepon.length >0){
          setValidation('cekNoTelepon','')
        }
      }

      const changeText = (key, value) => {
        setProfile({
          ...profile,
          [key]: value,
        });
      };

      const getImage = () => {
        ImagePicker.launchImageLibrary(
          {mediaType:'photo',quality: 0.5, maxWidth: 200, maxHeight: 200,includeBase64:true},
          response => {
            if (response.error) {
              //Alert.alert('oops, sepertinya anda tidak memilih foto ');
              Alert.alert('Hanya mendukung gambar.')
            }else if(response.didCancel){
              null
            } else {
              //const source = {uri: response.uri};
              setPhoto(`data:${response.assets[0].type};base64, ${response.assets[0].base64}`);
              console.log(`data:${response.assets[0].type};base64, ${response.assets[0].base64}`)
              //console.log(response.assets[0].data)
            }
          },
        );
      };

    useEffect(() => {
        getUser()
        return () => {
            console.log(profile.namaLengkap, profile.alamat, profile.noTelepon)
        }
        
    }, [navigation])

    return(
        <SafeAreaView style={styles.container}>
            <LinearGradient colors={['#D32A2A', '#CE1212']}  style={styles.headerRegister}>
                <Text style={{paddingHorizontal:20, position:'absolute', bottom:15, fontSize:22, fontWeight:'bold', color:'white'}}>Edit Account</Text>
            </LinearGradient>
            <ScrollView >
            <TouchableOpacity style={styles.borderProfile} onPress={getImage}>
                <Image source={{uri:photo}} style={styles.avatar} />
            </TouchableOpacity>
            <View style={{paddingHorizontal:20, paddingVertical:12, backgroundColor:'white', marginTop:20,}}>
                <Text style={{fontWeight:'bold', fontSize:14}}>Data Pribadi</Text>
            </View>
            <View style={{paddingHorizontal:20, paddingVertical:12, backgroundColor:'white', marginTop:1}}>
            
            <Text style={styles.label}>Nama Lengkap</Text>
            <TextInput
                onChangeText={value => changeText('namaLengkap', value)}
                value={profile.namaLengkap}
                placeholder="Masukkan nama lengkap"
                style={styles.inputText}
                onEndEditing={cekValidNama}
                placeholderTextColor="gray"

            />
            <Text style={styles.label}>Alamat</Text>
            
            <TextInput
                onChangeText={value => changeText('alamat', value)}
                value={profile.alamat}
                placeholder="Masukkan alamat sesuai KTP"
                style={styles.inputText}
                textContentType="fullStreetAddress"
                onEndEditing={cekValidAlamat}
                placeholderTextColor="gray"
            />
            <Text style={styles.label}>Nomor Telepon</Text>
            <TextInput
                onChangeText={value => changeText('noTelepon', value)}
                value={profile.noTelepon}
                placeholder="Masukkan nomor yang dapat dihubungi"
                style={styles.inputText}
                textContentType="telephoneNumber"
                keyboardType="number-pad"
                onEndEditing={cekValidNoTelepon}
                placeholderTextColor="gray"
            />
            
            <View style={{marginBottom:10, marginTop:10,}}>
                <Button
                title="Ubah "
                color='#F05454'
                onPress={() =>{
                    if(validation.cekNamaLengkap === '' && validation.cekAlamat === '' && validation.cekNoTelepon === ''){
                        setShowAlert2(!showAlert2)                        
                    }else{
                        setShowAlert(!showAlert)
                    }
                
                }}
                />
            </View>
            
            </View>
            <View style={{padding:20}}>
            <Text style={{color:'red', fontSize:12, marginTop:-5, marginLeft:5, marginBottom:5,}}>{validation.cekNamaLengkap}</Text>
            <Text style={{color:'red', fontSize:12, marginTop:-5, marginLeft:5, marginBottom:5,}}>{validation.cekAlamat}</Text>
            <Text style={{color:'red', fontSize:12, marginTop:-5, marginLeft:5, marginBottom:10,}}> {validation.cekNoTelepon}</Text>
            </View>
            
            </ScrollView>
            
            <AwesomeAlert
            show={showAlert2}
            showProgress={false}
            message="Konfirmasi untuk mengubah data"
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={false}
            confirmText="Konformasi"
            cancelText="Kembali"
            showConfirmButton={true}
            showCancelButton={true}
            onCancelPressed={()=>
                setShowAlert2(false)
            }
            onConfirmPressed={()=>{
                updateUser()
            }}
            />
            <AwesomeAlert
            show={showAlert}
            showProgress={false}
            title="Terjadi Kesalahan"
            message="Tolong cek kembali data yang anda masukkan."
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={false}
            showConfirmButton={true}
            onConfirmPressed={()=>
                setShowAlert(false)
            }
            />
        </SafeAreaView>
        
    )
}

export default UpdateAccount;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F3F3',
      },
      headerRegister:{
        height:85,
        marginBottom:0,
        marginBottom:40,
    },
    avatar: {width: 120, height: 120, borderRadius: 120 / 2},
    borderProfile: {
    // width: 130,
    // height: 130,
    // borderRadius: 130 / 2,
    // borderWidth: 1,
    // borderColor: '#000000',
    // justifyContent: 'center',
    // alignItems: 'center',
    alignSelf:'center',
      borderWidth: 1,
      borderRadius: 130/2,
      borderColor: '#F3F3F3',
      borderBottomWidth: 2,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.9,
      shadowRadius: 10,
      flexDirection:'row',
      alignSelf:'center',
      padding:4,
      width:130,
      height:130,
      backgroundColor:'white',
      elevation:2,
      marginBottom:20,
  },
  inputText:{
    borderBottomWidth: 1,
    borderColor: '#F3F3F3',
    borderBottomWidth: 2,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    alignSelf:'center',
    width:'100%',
    backgroundColor:'white',
    fontSize:12,
    marginBottom:20,
    color:'black'

},
label:{
    marginLeft:5, fontWeight:'bold', fontSize:12,
    marginTop:0,
},
})