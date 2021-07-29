import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, StatusBar, ScrollView, TextInput, ImageBackground, Button} from 'react-native';

import {useForm} from '../../utils';

import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

import AwesomeAlert from 'react-native-awesome-alerts';

const Login = ({navigation}) => {
    
  const [form, setForm] = useForm({email: '', password: ''});

  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
  };

  
  const [showAlert2, setShowAlert2] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const onLogin = () => {
        let emaillower = String(form.email).toLowerCase()
         setForm('email', emaillower)
         axios.get('http://192.168.100.5/donorinAPI/public/akunDonorbyEmail/'+form.email, axiosConfig)
         .then((res) => {
          if(res){
            axios.post('http://192.168.100.5/donorinAPI/public/login', form, axiosConfig)
            .then((res3) =>{
                //console.log('berhasil login '+res3.data.message)
                var items = {}
                items.idAkun = res3.data.idAkun
                items.token = res3.data.token
                AsyncStorage.setItem('@storage_Key', JSON.stringify(items));
                navigation.navigate('MainApp')
            }).catch((error3) =>{
                console.log('Error disini '+error3)
                setShowAlert(!showAlert)
            })
          }
        }).catch((error2)=>{
            console.log('Error disini 2'+error2)
            //setShowAlert2(!showAlert2)
        })
    }

    useEffect(() => {
        console.log(form)
    }, [form])
        //  }).catch((error) =>{
        //      axios.post('http://192.168.100.5/donorinAPI/public/register', form, axiosConfig)
        //       .then((res2) => {
        //          //console.log(res2)
        //           //console.log(form)
                 
        //       }).catch((error2) =>{
        //           console.log(error2)
        //       })
        //  })
    //  }else{
    //      console.log(false)
    //      setShowAlert(!showAlert)
    //  }
//    }

    return (
        <ImageBackground source={require('../../assets/background_login.png')} style={styles.page}>
            
            <View style={{position:'absolute',alignSelf:'center', bottom:20, width:'100%'}}>
                <Image style={styles.imageSplash} source={require('../../assets/pmi.png')} />
                <TextInput
                    onChangeText={value => setForm('email', value)}
                    value={form.email}
                    placeholder="Masukkan email anda"
                    keyboardType="email-address"
                    style={styles.inputText}
                    textContentType="emailAddress"
                    placeholderTextColor="gray" 
                />
                <TextInput
                    onChangeText={value => setForm('password', value)}
                    value={form.password}
                    placeholder="Masukkan password anda"
                    style={styles.inputText}
                    textContentType="password"
                    placeholderTextColor="gray"
                    secureTextEntry

                />
                <Button
                title="Login"
                style={styles.Button}
                color='#F05454'
                onPress={onLogin}
                />
                <Text style={{color:'white', textAlign:'center', marginVertical:15, marginTop:150,}}>Anda tidak memiliki akun?</Text>
                <Button
                title="REGISTER"
                style={styles.Button}
                color='#30475E'
                onPress={()=>{navigation.navigate('Register')}}
                />
                <Text style={{color:'#CBCBCB', textAlign:'center', marginVertical:10, marginTop:20, fontSize:12,}}>Donorin version 1.0.0</Text>
            </View>
            <AwesomeAlert
            show={showAlert2}
            showProgress={false}
            title="Terjadi Kesalahan"
            message="Email yang anda masukkan tidak terdaftar"
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={false}
            confirmText="Register"
            cancelText="Kembali"
            showConfirmButton={true}
            showCancelButton={true}
            onCancelPressed={()=>
                setShowAlert2(false)
            }
            onConfirmPressed={()=>{
                navigation.navigate('Register')
            }}
            />
            <AwesomeAlert
            show={showAlert}
            showProgress={false}
            title="Terjadi Kesalahan"
            message="Password yang anda masukkan salah."
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={false}
            showConfirmButton={true}
            onConfirmPressed={()=>
                setShowAlert(false)
            }
            />
        </ImageBackground>
    )
}

export default Login;

const styles = StyleSheet.create({
    page: {padding: 40, flex: 1, },
    inputText:{
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#F3F3F3',
        borderBottomWidth: 2,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 10,
        alignSelf:'center',
        width:'100%',
        paddingHorizontal:15,
        backgroundColor:'white',
        fontSize:12,
        marginBottom:15,
        color:'black'

    },
    Button: {
        borderRadius:10,
      },
    imageSplash: {
    width:250,
    height:125,
    alignSelf:'center',
    marginBottom: 50,
    },
});
