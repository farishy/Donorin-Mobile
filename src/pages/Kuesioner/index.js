import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, StatusBar, ScrollView, TextInput, ImageBackground, Button, SafeAreaView, TouchableOpacity, Modal} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useForm} from '../../utils';

import DateTimePickerModal from "react-native-modal-datetime-picker";
import CheckBox from '@react-native-community/checkbox';
import AwesomeAlert from 'react-native-awesome-alerts';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Kuesioner = ({navigation}) => {

    const [form, setForm] = useForm({
        Q1:'',
        Q2:'',
        Q3:'',
        Q4:'',
        Q5:'',
        Q6:'',
        Q7:'',
        Q8:'',
        Q9:'',
        Q10:'',
        Q11:'',
        Q12:'',
        Q13:'',
        Q14:'',
        Q15:'',
        Q16:'',
        Q17:'',
        Q18:'',
        Q19:'',
        Q20:'',
        Q21:'',
        Q22:'',
        Q23:'',
        Q24:'',
        Q25:'',
        Q26:'',
        Q27:'',
        Q28:'',
        Q29:'',
        Q30:'',
        Q31:'',
        Q32:'',
        Q33:'',
        Q34:'',
        Q35:'',
        Q36:'',
        Q37:'',
        Q38:'',
        Q39:'',
        idAkun:'',
    })

    const [q1TrueChecked, setQ1TrueChecked] = useState(false);
    const [q1FalseChecked, setQ1FalseChecked] = useState(true);
    const [q2TrueChecked, setQ2TrueChecked] = useState(false);
    const [q2FalseChecked, setQ2FalseChecked] = useState(true);
    const [q3TrueChecked, setQ3TrueChecked] = useState(false);
    const [q3FalseChecked, setQ3FalseChecked] = useState(true);
    const [q4TrueChecked, setQ4TrueChecked] = useState(false);
    const [q4FalseChecked, setQ4FalseChecked] = useState(true);
    const [q5TrueChecked, setQ5TrueChecked] = useState(false);
    const [q5FalseChecked, setQ5FalseChecked] = useState(true);
    const [q6TrueChecked, setQ6TrueChecked] = useState(false);
    const [q6FalseChecked, setQ6FalseChecked] = useState(true);
    const [q7TrueChecked, setQ7TrueChecked] = useState(false);
    const [q7FalseChecked, setQ7FalseChecked] = useState(true);
    const [q8TrueChecked, setQ8TrueChecked] = useState(false);
    const [q8FalseChecked, setQ8FalseChecked] = useState(true);
    const [q9TrueChecked, setQ9TrueChecked] = useState(false);
    const [q9FalseChecked, setQ9FalseChecked] = useState(true);
    const [q10TrueChecked, setQ10TrueChecked] = useState(false);
    const [q10FalseChecked, setQ10FalseChecked] = useState(true);
    const [q11TrueChecked, setQ11TrueChecked] = useState(false);
    const [q11FalseChecked, setQ11FalseChecked] = useState(true);
    const [q12TrueChecked, setQ12TrueChecked] = useState(false);
    const [q12FalseChecked, setQ12FalseChecked] = useState(true);
    const [q13TrueChecked, setQ13TrueChecked] = useState(false);
    const [q13FalseChecked, setQ13FalseChecked] = useState(true);
    const [q14TrueChecked, setQ14TrueChecked] = useState(false);
    const [q14FalseChecked, setQ14FalseChecked] = useState(true);
    const [q15TrueChecked, setQ15TrueChecked] = useState(false);
    const [q15FalseChecked, setQ15FalseChecked] = useState(true);
    const [q16TrueChecked, setQ16TrueChecked] = useState(false);
    const [q16FalseChecked, setQ16FalseChecked] = useState(true);
    const [q17TrueChecked, setQ17TrueChecked] = useState(false);
    const [q17FalseChecked, setQ17FalseChecked] = useState(true);
    const [q18TrueChecked, setQ18TrueChecked] = useState(false);
    const [q18FalseChecked, setQ18FalseChecked] = useState(true);
    const [q19TrueChecked, setQ19TrueChecked] = useState(false);
    const [q19FalseChecked, setQ19FalseChecked] = useState(true);
    const [q20TrueChecked, setQ20TrueChecked] = useState(false);
    const [q20FalseChecked, setQ20FalseChecked] = useState(true);
    const [q21TrueChecked, setQ21TrueChecked] = useState(false);
    const [q21FalseChecked, setQ21FalseChecked] = useState(true);
    const [q22TrueChecked, setQ22TrueChecked] = useState(false);
    const [q22FalseChecked, setQ22FalseChecked] = useState(true);
    const [q23TrueChecked, setQ23TrueChecked] = useState(false);
    const [q23FalseChecked, setQ23FalseChecked] = useState(true);
    const [q24TrueChecked, setQ24TrueChecked] = useState(false);
    const [q24FalseChecked, setQ24FalseChecked] = useState(true);
    const [q25TrueChecked, setQ25TrueChecked] = useState(false);
    const [q25FalseChecked, setQ25FalseChecked] = useState(true);
    const [q26TrueChecked, setQ26TrueChecked] = useState(false);
    const [q26FalseChecked, setQ26FalseChecked] = useState(true);
    const [q27TrueChecked, setQ27TrueChecked] = useState(false);
    const [q27FalseChecked, setQ27FalseChecked] = useState(true);
    const [q28TrueChecked, setQ28TrueChecked] = useState(false);
    const [q28FalseChecked, setQ28FalseChecked] = useState(true);
    const [q29TrueChecked, setQ29TrueChecked] = useState(false);
    const [q29FalseChecked, setQ29FalseChecked] = useState(true);
    const [q30TrueChecked, setQ30TrueChecked] = useState(false);
    const [q30FalseChecked, setQ30FalseChecked] = useState(true);
    const [q31TrueChecked, setQ31TrueChecked] = useState(false);
    const [q31FalseChecked, setQ31FalseChecked] = useState(true);
    const [q32TrueChecked, setQ32TrueChecked] = useState(false);
    const [q32FalseChecked, setQ32FalseChecked] = useState(true);
    const [q33TrueChecked, setQ33TrueChecked] = useState(false);
    const [q33FalseChecked, setQ33FalseChecked] = useState(true);
    const [q34TrueChecked, setQ34TrueChecked] = useState(false);
    const [q34FalseChecked, setQ34FalseChecked] = useState(true);
    const [q35TrueChecked, setQ35TrueChecked] = useState(false);
    const [q35FalseChecked, setQ35FalseChecked] = useState(true);
    const [q36TrueChecked, setQ36TrueChecked] = useState(false);
    const [q36FalseChecked, setQ36FalseChecked] = useState(true);
    const [q37TrueChecked, setQ37TrueChecked] = useState(false);
    const [q37FalseChecked, setQ37FalseChecked] = useState(true);
    const [q38TrueChecked, setQ38TrueChecked] = useState(false);
    const [q38FalseChecked, setQ38FalseChecked] = useState(true);
    const [q39TrueChecked, setQ39TrueChecked] = useState(false);
    const [q39FalseChecked, setQ39FalseChecked] = useState(true);
    
    const kuesionerUser = () =>{
        if(q1TrueChecked){
            form.Q1 = 'True'
        }else if(q1FalseChecked){
            form.Q1 = 'false'
        }

        if(q2TrueChecked){
            form.Q2 = 'True'
        }else if(q2FalseChecked){
            form.Q2 = 'false'
        }

        if(q3TrueChecked){
            form.Q3 = 'True'
        }else if(q3FalseChecked){
            form.Q3 = 'false'
        }

        if(q4TrueChecked){
            form.Q4 = 'True'
        }else if(q4FalseChecked){
            form.Q4 = 'false'
        }

        if(q5TrueChecked){
            form.Q5 = 'True'
        }else if(q5FalseChecked){
            form.Q5 = 'false'
        }

        if(q6TrueChecked){
            form.Q6 = 'True'
        }else if(q6FalseChecked){
            form.Q6 = 'false'
        }

        if(q7TrueChecked){
            form.Q7 = 'True'
        }else if(q7FalseChecked){
            form.Q7 = 'false'
        }

        if(q8TrueChecked){
            form.Q8 = 'True'
        }else if(q8FalseChecked){
            form.Q8 = 'false'
        }

        if(q9TrueChecked){
            form.Q9 = 'True'
        }else if(q9FalseChecked){
            form.Q9 = 'false'
        }

        if(q10TrueChecked){
            form.Q10 = 'True'
        }else if(q10FalseChecked){
            form.Q10 = 'false'
        }

        if(q11TrueChecked){
            form.Q11 = 'True'
        }else if(q11FalseChecked){
            form.Q11 = 'false'
        }

        if(q12TrueChecked){
            form.Q12 = 'True'
        }else if(q12FalseChecked){
            form.Q12 = 'false'
        }

        if(q13TrueChecked){
            form.Q13 = 'True'
        }else if(q13FalseChecked){
            form.Q13 = 'false'
        }

        if(q14TrueChecked){
            form.Q14 = 'True'
        }else if(q14FalseChecked){
            form.Q14 = 'false'
        }

        if(q15TrueChecked){
            form.Q15 = 'True'
        }else if(q15FalseChecked){
            form.Q15 = 'false'
        }

        if(q16TrueChecked){
            form.Q16 = 'True'
        }else if(q16FalseChecked){
            form.Q16 = 'false'
        }

        if(q17TrueChecked){
            form.Q17 = 'True'
        }else if(q17FalseChecked){
            form.Q17 = 'false'
        }

        if(q18TrueChecked){
            form.Q18 = 'True'
        }else if(q18FalseChecked){
            form.Q18 = 'false'
        }

        if(q19TrueChecked){
            form.Q19 = 'True'
        }else if(q19FalseChecked){
            form.Q19 = 'false'
        }

        if(q20TrueChecked){
            form.Q20 = 'True'
        }else if(q20FalseChecked){
            form.Q20 = 'false'
        }

        if(q21TrueChecked){
            form.Q21 = 'True'
        }else if(q21FalseChecked){
            form.Q21 = 'false'
        }

        if(q22TrueChecked){
            form.Q22 = 'True'
        }else if(q22FalseChecked){
            form.Q22 = 'false'
        }

        if(q23TrueChecked){
            form.Q23 = 'True'
        }else if(q23FalseChecked){
            form.Q23 = 'false'
        }

        if(q24TrueChecked){
            form.Q24 = 'True'
        }else if(q24FalseChecked){
            form.Q24 = 'false'
        }

        if(q25TrueChecked){
            form.Q25 = 'True'
        }else if(q25FalseChecked){
            form.Q25 = 'false'
        }

        if(q26TrueChecked){
            form.Q26 = 'True'
        }else if(q26FalseChecked){
            form.Q26 = 'false'
        }

        if(q27TrueChecked){
            form.Q27 = 'True'
        }else if(q27FalseChecked){
            form.Q27 = 'false'
        }

        if(q28TrueChecked){
            form.Q28 = 'True'
        }else if(q28FalseChecked){
            form.Q28 = 'false'
        }

        if(q29TrueChecked){
            form.Q29 = 'True'
        }else if(q29FalseChecked){
            form.Q29 = 'false'
        }

        if(q30TrueChecked){
            form.Q30 = 'True'
        }else if(q30FalseChecked){
            form.Q30 = 'false'
        }

        if(q31TrueChecked){
            form.Q31 = 'True'
        }else if(q31FalseChecked){
            form.Q31 = 'false'
        }

        if(q32TrueChecked){
            form.Q32 = 'True'
        }else if(q32FalseChecked){
            form.Q32 = 'false'
        }

        if(q33TrueChecked){
            form.Q33 = 'True'
        }else if(q33FalseChecked){
            form.Q33 = 'false'
        }

        if(q34TrueChecked){
            form.Q34 = 'True'
        }else if(q34FalseChecked){
            form.Q34 = 'false'
        }

        if(q35TrueChecked){
            form.Q35 = 'True'
        }else if(q35FalseChecked){
            form.Q35 = 'false'
        }

        if(q36TrueChecked){
            form.Q36 = 'True'
        }else if(q36FalseChecked){
            form.Q36 = 'false'
        }

        if(q37TrueChecked){
            form.Q37 = 'True'
        }else if(q37FalseChecked){
            form.Q37 = 'false'
        }

        if(q38TrueChecked){
            form.Q38 = 'True'
        }else if(q38FalseChecked){
            form.Q38 = 'false'
        }

        if(q39TrueChecked){
            form.Q39 = 'True'
        }else if(q39FalseChecked){
            form.Q39 = 'false'
        }
    }

    const [form2, setForm2] = useForm({
        idAkun: '',
        tglTransaksi: '',
        statusTransaksi: '',
        keterangan: '',
        idKuesioner: '',
    })

    const onContinueTransaction = async() => {
        const value = await AsyncStorage.getItem('@storage_Key').then((info)=>{
            let infoUser = JSON.parse(info)
            let axiosConfig = {
              headers: {
                  'Content-Type': 'application/json;charset=UTF-8',
                  "Access-Control-Allow-Origin": "*",
                  'Authorization': 'Bearer ' + infoUser.token
              }
            }
            kuesionerUser()
            form.idAkun = infoUser.idAkun
            const response = axios.post('http://192.168.100.5/donorinAPI/public/kuesioner', form, axiosConfig)
            .then((response) =>{
              console.log('Berhasil menambahkan kuesioner')
              const response2 = axios.get('http://192.168.100.5/donorinAPI/public/lastKuesionerByIdAkun/'+infoUser.idAkun, axiosConfig)
                .then((response2) =>{
                // console.log('Berhasil mendapatkan data kuesioner')
                // console.log(response2.data[0].idKuesioner)
                    form2.idAkun = form.idAkun
                    form2.tglTransaksi = new Date()
                    form2.statusTransaksi = 'On Progress' 
                    form2.keterangan = 'Pengajuan formulir donor darah'
                    form2.idKuesioner =  response2.data[0].idKuesioner
                    console.log(form2)
                    const response3 = axios.post('http://192.168.100.5/donorinAPI/public/transaksi', form2, axiosConfig)
                    .then((response3) =>{
                        console.log('Berhasil menambahkan transaksi')
                        navigation.replace('StatusTransaksi')

                    }).catch(error3 => {
                    console.log(error3)
                    })
                    
                }).catch(error2 => {
                console.log(error2)
                })
            }).catch(error => {
              console.log(error)
            })
          })
        //  if(form.cekNamaLengkap == '' && form.cekAlamat == '' && form.cekNoKTP == '' && form.cekNoTelepon == '' &&
        //  form.cekEmail == '' && form.cekPassword == '' && form.cekRepassword == '' && form.tglLahir != '' && form.tempatLahir != ''){
        //      //console.log(true)
        //      let emaillower = String(form.email).toLowerCase()
        //      setForm('email', emaillower)
        //      setForm('cekTempatLahir','')
        //      setForm('cekTglLahir','')
        //      axios.get('http://192.168.100.5/donorinAPI/public/akunDonorbyEmail/'+form.email, axiosConfig)
        //      .then((res) => {
        //       if(res){
        //          setShowAlert2(!showAlert2)
        //       }
        //      }).catch((error) =>{
        //          axios.post('http://192.168.100.5/donorinAPI/public/register', form, axiosConfig)
        //           .then((res2) => {
        //              //console.log(res2)
        //               //console.log(form)
        //              axios.post('http://192.168.100.5/donorinAPI/public/login', form, axiosConfig)
        //              .then((res3) =>{
        //                  //console.log('berhasil login '+res3.data.message)
        //                  var items = {}
        //                  items.idAkun = res3.data.idAkun
        //                  items.token = res3.data.token
        //                  AsyncStorage.setItem('@storage_Key', JSON.stringify(items));
        //                  navigation.replace('MainApp')
        //              }).catch((error3) =>{
        //                  console.log(error3)
        //              })
        //           }).catch((error2) =>{
        //               console.log(error2)
        //           })
        //      })
        //  }else{
        //      console.log(false)
        //      setShowAlert(!showAlert)
        //  }
       }

    
    return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#D32A2A', '#CE1212']}  style={styles.headerRegister}>
        <Text style={{paddingHorizontal:20, position:'absolute', bottom:15, fontSize:22, fontWeight:'bold', color:'white'}}>Kuesioner Donor Darah</Text>
      </LinearGradient>
      <ScrollView style={styles.forms}>
        <View style={styles.row}>
            <Text style={[{width:'10%'}, styles.colomn,{fontSize:14}]}>No.</Text>
            <Text style={[{width:'60%'}, styles.colomn,{fontSize:14}]}>Pertanyaan</Text>
            <Text style={[{width:'15%'}, styles.colomn,{fontSize:14}]}>Tidak</Text>
            <Text style={[{width:'15%'}, styles.colomn,{fontSize:14}]}>Ya</Text>
        </View>
        <View style={{flexDirection:'row',width:'100%', justifyContent:'space-between'}}>
            <Text style={[{width:'10%'}, styles.colomn,]}>1</Text>
            <Text style={[{width:'60%',}, styles.colomn,{textAlign:'left',paddingHorizontal:15,}]}>Merasa sehat pada hari ini?</Text>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q1FalseChecked} onValueChange={(q1TrueChecked) => [setQ1FalseChecked(q1TrueChecked), setQ1TrueChecked(q1FalseChecked)]}/>
            </View>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q1TrueChecked} onValueChange={(q1FalseChecked) => [setQ1TrueChecked(q1FalseChecked), setQ1FalseChecked(q1TrueChecked)]}/>
            </View>
            
        </View>
        <View style={{flexDirection:'row',width:'100%', justifyContent:'space-between'}}>
            <Text style={[{width:'10%'}, styles.colomn,]}>2</Text>
            <Text style={[{width:'60%',}, styles.colomn,{textAlign:'left',paddingHorizontal:15,}]}>Sedang meminum antibiotik?</Text>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q2FalseChecked} onValueChange={(q2TrueChecked) => [setQ2FalseChecked(q2TrueChecked), setQ2TrueChecked(q2FalseChecked)]}/>
            </View>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q2TrueChecked} onValueChange={(q2FalseChecked) => [setQ2TrueChecked(q2FalseChecked), setQ2FalseChecked(q2TrueChecked)]}/>
            </View>
            
        </View>
        <View style={{flexDirection:'row',width:'100%', justifyContent:'space-between'}}>
            <Text style={[{width:'10%'}, styles.colomn,]}>3</Text>
            <Text style={[{width:'60%',}, styles.colomn,{textAlign:'left',paddingHorizontal:15,}]}>Apakah anda sedang minum aspirin atau obat yang mengandung aspirin dalam 48 jam terakhir?</Text>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q3FalseChecked} onValueChange={(q3TrueChecked) => [setQ3FalseChecked(q3TrueChecked), setQ3TrueChecked(q3FalseChecked)]}/>
            </View>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q3TrueChecked} onValueChange={(q3FalseChecked) => [setQ3TrueChecked(q3FalseChecked), setQ3FalseChecked(q3TrueChecked)]}/>
            </View>
            
        </View>
        <View style={{flexDirection:'row',width:'100%', justifyContent:'space-between'}}>
            <Text style={[{width:'10%'}, styles.colomn,]}>4</Text>
            <Text style={[{width:'60%',}, styles.colomn,{textAlign:'left',paddingHorizontal:15,}]}>Apakah kamu mengalami sakit kepala dan dan demam bersamaan dalam 2 minggu terakhir?</Text>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q4FalseChecked} onValueChange={(q4TrueChecked) => [setQ4FalseChecked(q4TrueChecked), setQ4TrueChecked(q4FalseChecked)]}/>
            </View>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q4TrueChecked} onValueChange={(q4FalseChecked) => [setQ4TrueChecked(q4FalseChecked), setQ4FalseChecked(q4TrueChecked)]}/>
            </View>
            
        </View>
        <View style={{flexDirection:'row',width:'100%', justifyContent:'space-between'}}>
            <Text style={[{width:'10%'}, styles.colomn,]}>5</Text>
            <Text style={[{width:'60%',}, styles.colomn,{textAlign:'left',paddingHorizontal:15,}]}>Untuk donor darah wanita: apakah anda saat ini sedang hamil dalam 6 minggu terakhir?</Text>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q5FalseChecked} onValueChange={(q5TrueChecked) => [setQ5FalseChecked(q5TrueChecked), setQ5TrueChecked(q5FalseChecked)]}/>
            </View>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q5TrueChecked} onValueChange={(q5FalseChecked) => [setQ5TrueChecked(q5FalseChecked), setQ5FalseChecked(q5TrueChecked)]}/>
            </View>
            
        </View>
        <View style={{flexDirection:'row',width:'100%', justifyContent:'space-between'}}>
            <Text style={[{width:'10%'}, styles.colomn,]}>6</Text>
            <Text style={[{width:'60%',}, styles.colomn,{textAlign:'left',paddingHorizontal:15,}]}>Apakah anda mendonorkan darah, trombosit atau plasma dalam 8 minggu terakhir?</Text>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q6FalseChecked} onValueChange={(q6TrueChecked) => [setQ6FalseChecked(q6TrueChecked), setQ6TrueChecked(q6FalseChecked)]}/>
            </View>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q6TrueChecked} onValueChange={(q6FalseChecked) => [setQ6TrueChecked(q6FalseChecked), setQ6FalseChecked(q6TrueChecked)]}/>
            </View>
            
        </View>
        <View style={{flexDirection:'row',width:'100%', justifyContent:'space-between'}}>
            <Text style={[{width:'10%'}, styles.colomn,]}>7</Text>
            <Text style={[{width:'60%',}, styles.colomn,{textAlign:'left',paddingHorizontal:15,}]}>Apakah anda menerima vaksinasi atau suntikan lainnya dalam 8 minggu terakhir?</Text>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q7FalseChecked} onValueChange={(q7TrueChecked) => [setQ7FalseChecked(q7TrueChecked), setQ7TrueChecked(q7FalseChecked)]}/>
            </View>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q7TrueChecked} onValueChange={(q7FalseChecked) => [setQ7TrueChecked(q7FalseChecked), setQ7FalseChecked(q7TrueChecked)]}/>
            </View>
            
        </View>
        <View style={{flexDirection:'row',width:'100%', justifyContent:'space-between'}}>
            <Text style={[{width:'10%'}, styles.colomn,]}>8</Text>
            <Text style={[{width:'60%',}, styles.colomn,{textAlign:'left',paddingHorizontal:15,}]}>Apakah anda pernah kontak dengan orang yang menerima vaksinasi smallpox dalam 8 minggu terakhir?</Text>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q8FalseChecked} onValueChange={(q8TrueChecked) => [setQ8FalseChecked(q8TrueChecked), setQ8TrueChecked(q8FalseChecked)]}/>
            </View>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q8TrueChecked} onValueChange={(q8FalseChecked) => [setQ8TrueChecked(q8FalseChecked), setQ8FalseChecked(q8TrueChecked)]}/>
            </View>
            
        </View>
        <View style={{flexDirection:'row',width:'100%', justifyContent:'space-between'}}>
            <Text style={[{width:'10%'}, styles.colomn,]}>9</Text>
            <Text style={[{width:'60%',}, styles.colomn,{textAlign:'left',paddingHorizontal:15,}]}>Apakah anda mendonorkan 2 kantong sel darah merah melalui proses eferesi dalam 16 minggu terakhir?</Text>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q9FalseChecked} onValueChange={(q9TrueChecked) => [setQ9FalseChecked(q9TrueChecked), setQ9TrueChecked(q9FalseChecked)]}/>
            </View>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q9TrueChecked} onValueChange={(q9FalseChecked) => [setQ9TrueChecked(q9FalseChecked), setQ9FalseChecked(q9TrueChecked)]}/>
            </View>
            
        </View>
        <View style={{flexDirection:'row',width:'100%', justifyContent:'space-between'}}>
            <Text style={[{width:'10%'}, styles.colomn,]}>10</Text>
            <Text style={[{width:'60%',}, styles.colomn,{textAlign:'left',paddingHorizontal:15,}]}>Apakah anda pernah menerima transfusi darah dalam 12 bulan terakhir?</Text>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q10FalseChecked} onValueChange={(q10TrueChecked) => [setQ10FalseChecked(q10TrueChecked), setQ10TrueChecked(q10FalseChecked)]}/>
            </View>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q10TrueChecked} onValueChange={(q10FalseChecked) => [setQ10TrueChecked(q10FalseChecked), setQ10FalseChecked(q10TrueChecked)]}/>
            </View>
            
        </View>
        <View style={{flexDirection:'row',width:'100%', justifyContent:'space-between'}}>
            <Text style={[{width:'10%'}, styles.colomn,]}>11</Text>
            <Text style={[{width:'60%',}, styles.colomn,{textAlign:'left',paddingHorizontal:15,}]}>Apakah anda pernah mendapatkan transplantasi, organ, jaringan atau sumsum tulang dalam 12 bulan terakhir?</Text>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q11FalseChecked} onValueChange={(q11TrueChecked) => [setQ11FalseChecked(q11TrueChecked), setQ11TrueChecked(q11FalseChecked)]}/>
            </View>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q11TrueChecked} onValueChange={(q11FalseChecked) => [setQ11TrueChecked(q11FalseChecked), setQ11FalseChecked(q11TrueChecked)]}/>
            </View>
            
        </View>
        <View style={{flexDirection:'row',width:'100%', justifyContent:'space-between'}}>
            <Text style={[{width:'10%'}, styles.colomn,]}>12</Text>
            <Text style={[{width:'60%',}, styles.colomn,{textAlign:'left',paddingHorizontal:15,}]}>Apakah anda pernah cangkok tulang atau kulit dalam 12 bulan terakhir?</Text>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q12FalseChecked} onValueChange={(q12TrueChecked) => [setQ12FalseChecked(q12TrueChecked), setQ12TrueChecked(q12FalseChecked)]}/>
            </View>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q12TrueChecked} onValueChange={(q12FalseChecked) => [setQ12TrueChecked(q12FalseChecked), setQ12FalseChecked(q12TrueChecked)]}/>
            </View>
            
        </View>
        <View style={{flexDirection:'row',width:'100%', justifyContent:'space-between'}}>
            <Text style={[{width:'10%'}, styles.colomn,]}>13</Text>
            <Text style={[{width:'60%',}, styles.colomn,{textAlign:'left',paddingHorizontal:15,}]}>Apakah anda pernah tertusuk jarum medis dalam 12 bulan terakhir?</Text>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q13FalseChecked} onValueChange={(q13TrueChecked) => [setQ13FalseChecked(q13TrueChecked), setQ13TrueChecked(q13FalseChecked)]}/>
            </View>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q13TrueChecked} onValueChange={(q13FalseChecked) => [setQ13TrueChecked(q13FalseChecked), setQ13FalseChecked(q13TrueChecked)]}/>
            </View>
            
        </View>
        <View style={{flexDirection:'row',width:'100%', justifyContent:'space-between'}}>
            <Text style={[{width:'10%'}, styles.colomn,]}>14</Text>
            <Text style={[{width:'60%',}, styles.colomn,{textAlign:'left',paddingHorizontal:15,}]}>Apakah anda pernah berhubungan seksual dengan orang dengan HIV/AIDS dalam 12 bulan terakhir?</Text>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q14FalseChecked} onValueChange={(q14TrueChecked) => [setQ14FalseChecked(q14TrueChecked), setQ14TrueChecked(q14FalseChecked)]}/>
            </View>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q14TrueChecked} onValueChange={(q14FalseChecked) => [setQ14TrueChecked(q14FalseChecked), setQ14FalseChecked(q14TrueChecked)]}/>
            </View>
            
        </View>
        <View style={{flexDirection:'row',width:'100%', justifyContent:'space-between'}}>
            <Text style={[{width:'10%'}, styles.colomn,]}>15</Text>
            <Text style={[{width:'60%',}, styles.colomn,{textAlign:'left',paddingHorizontal:15,}]}>Apakah anda pernah berhubungan seksual dengan pekerja seks komersial dalam 12 bulan terakhir?</Text>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q15FalseChecked} onValueChange={(q15TrueChecked) => [setQ15FalseChecked(q15TrueChecked), setQ15TrueChecked(q15FalseChecked)]}/>
            </View>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q15TrueChecked} onValueChange={(q15FalseChecked) => [setQ15TrueChecked(q15FalseChecked), setQ15FalseChecked(q15TrueChecked)]}/>
            </View>
            
        </View>
        <View style={{flexDirection:'row',width:'100%', justifyContent:'space-between'}}>
            <Text style={[{width:'10%'}, styles.colomn,]}>16</Text>
            <Text style={[{width:'60%',}, styles.colomn,{textAlign:'left',paddingHorizontal:15,}]}>Apakah anda pernah berhubungan seksual dengan pengguna konsentrat faktor pembekuan dalam 12 bulan terakhir?</Text>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q16FalseChecked} onValueChange={(q16TrueChecked) => [setQ16FalseChecked(q16TrueChecked), setQ16TrueChecked(q16FalseChecked)]}/>
            </View>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q16TrueChecked} onValueChange={(q16FalseChecked) => [setQ16TrueChecked(q16FalseChecked), setQ16FalseChecked(q16TrueChecked)]}/>
            </View>
            
        </View>
        <View style={{flexDirection:'row',width:'100%', justifyContent:'space-between'}}>
            <Text style={[{width:'10%'}, styles.colomn,]}>17</Text>
            <Text style={[{width:'60%',}, styles.colomn,{textAlign:'left',paddingHorizontal:15,}]}>Untuk donor wanita: apakah anda pernah berhubungan seksual dengan laki-laki yang biseksual dalam 12 bulan terakhir?</Text>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q17FalseChecked} onValueChange={(q17TrueChecked) => [setQ17FalseChecked(q17TrueChecked), setQ17TrueChecked(q17FalseChecked)]}/>
            </View>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q17TrueChecked} onValueChange={(q17FalseChecked) => [setQ17TrueChecked(q17FalseChecked), setQ17FalseChecked(q17TrueChecked)]}/>
            </View>
            
        </View>
        <View style={{flexDirection:'row',width:'100%', justifyContent:'space-between'}}>
            <Text style={[{width:'10%'}, styles.colomn,]}>18</Text>
            <Text style={[{width:'60%',}, styles.colomn,{textAlign:'left',paddingHorizontal:15,}]}>Apakah anda pernah berhubungan seksual dengan pengguna narkoba jarum suntik dalam 12 bulan terakhir?</Text>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q18FalseChecked} onValueChange={(q18TrueChecked) => [setQ18FalseChecked(q18TrueChecked), setQ18TrueChecked(q18FalseChecked)]}/>
            </View>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q18TrueChecked} onValueChange={(q18FalseChecked) => [setQ18TrueChecked(q18FalseChecked), setQ18FalseChecked(q18TrueChecked)]}/>
            </View>
            
        </View>
        <View style={{flexDirection:'row',width:'100%', justifyContent:'space-between'}}>
            <Text style={[{width:'10%'}, styles.colomn,]}>19</Text>
            <Text style={[{width:'60%',}, styles.colomn,{textAlign:'left',paddingHorizontal:15,}]}>Apakah anda pernah berhubungan seksual dengan penderita hepatitis dalam 12 bulan terakhir?</Text>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q19FalseChecked} onValueChange={(q19TrueChecked) => [setQ19FalseChecked(q19TrueChecked), setQ19TrueChecked(q19FalseChecked)]}/>
            </View>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q19TrueChecked} onValueChange={(q19FalseChecked) => [setQ19TrueChecked(q19FalseChecked), setQ19FalseChecked(q19TrueChecked)]}/>
            </View>
            
        </View>
        <View style={{flexDirection:'row',width:'100%', justifyContent:'space-between'}}>
            <Text style={[{width:'10%'}, styles.colomn,]}>20</Text>
            <Text style={[{width:'60%',}, styles.colomn,{textAlign:'left',paddingHorizontal:15,}]}>Apakah anda memiliki tatto dalam 12 bulan terakhir?</Text>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q20FalseChecked} onValueChange={(q20TrueChecked) => [setQ20FalseChecked(q20TrueChecked), setQ20TrueChecked(q20FalseChecked)]}/>
            </View>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q20TrueChecked} onValueChange={(q20FalseChecked) => [setQ20TrueChecked(q20FalseChecked), setQ20FalseChecked(q20TrueChecked)]}/>
            </View>
            
        </View>
        <View style={{flexDirection:'row',width:'100%', justifyContent:'space-between'}}>
            <Text style={[{width:'10%'}, styles.colomn,]}>21</Text>
            <Text style={[{width:'60%',}, styles.colomn,{textAlign:'left',paddingHorizontal:15,}]}>Apakah anda memiliki tindik telinga atau bagian tubuh lainnya dalam 12 bulan terakhir?</Text>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q21FalseChecked} onValueChange={(q21TrueChecked) => [setQ21FalseChecked(q21TrueChecked), setQ21TrueChecked(q21FalseChecked)]}/>
            </View>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q21TrueChecked} onValueChange={(q21FalseChecked) => [setQ21TrueChecked(q21FalseChecked), setQ21FalseChecked(q21TrueChecked)]}/>
            </View>
            
        </View>
        <View style={{flexDirection:'row',width:'100%', justifyContent:'space-between'}}>
            <Text style={[{width:'10%'}, styles.colomn,]}>22</Text>
            <Text style={[{width:'60%',}, styles.colomn,{textAlign:'left',paddingHorizontal:15,}]}>Apakah anda sedang atau pernah mendapatkan pengobatan sifilis atau GO (kencing nanah) dalam 12 bulan terakhir?</Text>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q22FalseChecked} onValueChange={(q22TrueChecked) => [setQ22FalseChecked(q22TrueChecked), setQ22TrueChecked(q22FalseChecked)]}/>
            </View>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q22TrueChecked} onValueChange={(q22FalseChecked) => [setQ22TrueChecked(q22FalseChecked), setQ22FalseChecked(q22TrueChecked)]}/>
            </View>
            
        </View>
        <View style={{flexDirection:'row',width:'100%', justifyContent:'space-between'}}>
            <Text style={[{width:'10%'}, styles.colomn,]}>23</Text>
            <Text style={[{width:'60%',}, styles.colomn,{textAlign:'left',paddingHorizontal:15,}]}>Apakah anda pernah ditahan di penjara untuk waktu lebih dari 72 jam dalam 12 bulan terakhir?</Text>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q23FalseChecked} onValueChange={(q23TrueChecked) => [setQ23FalseChecked(q23TrueChecked), setQ23TrueChecked(q23FalseChecked)]}/>
            </View>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q23TrueChecked} onValueChange={(q23FalseChecked) => [setQ23TrueChecked(q23FalseChecked), setQ23FalseChecked(q23TrueChecked)]}/>
            </View>
            
        </View>
        <View style={{flexDirection:'row',width:'100%', justifyContent:'space-between'}}>
            <Text style={[{width:'10%'}, styles.colomn,]}>24</Text>
            <Text style={[{width:'60%',}, styles.colomn,{textAlign:'left',paddingHorizontal:15,}]}>Apakah anda pernah berada di luat negeri wilayah indonesia dalam waktu 3 tahun?</Text>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q24FalseChecked} onValueChange={(q24TrueChecked) => [setQ24FalseChecked(q24TrueChecked), setQ24TrueChecked(q24FalseChecked)]}/>
            </View>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q24TrueChecked} onValueChange={(q24FalseChecked) => [setQ24TrueChecked(q24FalseChecked), setQ24FalseChecked(q24TrueChecked)]}/>
            </View>
            
        </View>
        <View style={{flexDirection:'row',width:'100%', justifyContent:'space-between'}}>
            <Text style={[{width:'10%'}, styles.colomn,]}>25</Text>
            <Text style={[{width:'60%',}, styles.colomn,{textAlign:'left',paddingHorizontal:15,}]}>Apakah anda tunggal selama 3 bulan atau lebih di inggirs dari tahun 1980 hingga 1996?</Text>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q25FalseChecked} onValueChange={(q25TrueChecked) => [setQ25FalseChecked(q25TrueChecked), setQ25TrueChecked(q25FalseChecked)]}/>
            </View>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q25TrueChecked} onValueChange={(q25FalseChecked) => [setQ25TrueChecked(q25FalseChecked), setQ25FalseChecked(q25TrueChecked)]}/>
            </View>
            
        </View>
        <View style={{flexDirection:'row',width:'100%', justifyContent:'space-between'}}>
            <Text style={[{width:'10%'}, styles.colomn,]}>26</Text>
            <Text style={[{width:'60%',}, styles.colomn,{textAlign:'left',paddingHorizontal:15,}]}>Apakah anda tinggal selama 5 tahun atau lebih di eropa dari tahun 1980 hingga sekarang?</Text>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q26FalseChecked} onValueChange={(q26TrueChecked) => [setQ26FalseChecked(q26TrueChecked), setQ26TrueChecked(q26FalseChecked)]}/>
            </View>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q26TrueChecked} onValueChange={(q26FalseChecked) => [setQ26TrueChecked(q26FalseChecked), setQ26FalseChecked(q26TrueChecked)]}/>
            </View>
            
        </View>
        <View style={{flexDirection:'row',width:'100%', justifyContent:'space-between'}}>
            <Text style={[{width:'10%'}, styles.colomn,]}>27</Text>
            <Text style={[{width:'60%',}, styles.colomn,{textAlign:'left',paddingHorizontal:15,}]}>Apakah anda menerima transfusi datah di inggris dari tahun 1980 hingga sekarang?</Text>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q27FalseChecked} onValueChange={(q27TrueChecked) => [setQ1FalseChecked(q27TrueChecked), setQ27TrueChecked(q27FalseChecked)]}/>
            </View>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q27TrueChecked} onValueChange={(q27FalseChecked) => [setQ27TrueChecked(q27FalseChecked), setQ27FalseChecked(q27TrueChecked)]}/>
            </View>
            
        </View>
        <View style={{flexDirection:'row',width:'100%', justifyContent:'space-between'}}>
            <Text style={[{width:'10%'}, styles.colomn,]}>28</Text>
            <Text style={[{width:'60%',}, styles.colomn,{textAlign:'left',paddingHorizontal:15,}]}>Apakah anda menerima uang, obat atau pembayaran lainnya untuk seks dari tahun 1977 hingga sekarang?</Text>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q28FalseChecked} onValueChange={(q28TrueChecked) => [setQ28FalseChecked(q28TrueChecked), setQ28TrueChecked(q28FalseChecked)]}/>
            </View>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q28TrueChecked} onValueChange={(q28FalseChecked) => [setQ28TrueChecked(q28FalseChecked), setQ28FalseChecked(q28TrueChecked)]}/>
            </View>
            
        </View>
        <View style={{flexDirection:'row',width:'100%', justifyContent:'space-between'}}>
            <Text style={[{width:'10%'}, styles.colomn,]}>29</Text>
            <Text style={[{width:'60%',}, styles.colomn,{textAlign:'left',paddingHorizontal:15,}]}>Laki-laki: Apakah anda pernah berhubungan seksual dengan laki-laki, walaupun sekali dari tahun 1977 hingga sekarang?</Text>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q29FalseChecked} onValueChange={(q29TrueChecked) => [setQ29FalseChecked(q29TrueChecked), setQ29TrueChecked(q29FalseChecked)]}/>
            </View>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q29TrueChecked} onValueChange={(q29FalseChecked) => [setQ29TrueChecked(q29FalseChecked), setQ29FalseChecked(q29TrueChecked)]}/>
            </View>
            
        </View>
        <View style={{flexDirection:'row',width:'100%', justifyContent:'space-between'}}>
            <Text style={[{width:'10%'}, styles.colomn,]}>30</Text>
            <Text style={[{width:'60%',}, styles.colomn,{textAlign:'left',paddingHorizontal:15,}]}>Apakah anda pernah mendapatkan hasil positif untuk tes HIV/AIDS?</Text>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q30FalseChecked} onValueChange={(q30TrueChecked) => [setQ30FalseChecked(q30TrueChecked), setQ30TrueChecked(q30FalseChecked)]}/>
            </View>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q30TrueChecked} onValueChange={(q30FalseChecked) => [setQ30TrueChecked(q30FalseChecked), setQ30FalseChecked(q30TrueChecked)]}/>
            </View>
            
        </View>
        <View style={{flexDirection:'row',width:'100%', justifyContent:'space-between'}}>
            <Text style={[{width:'10%'}, styles.colomn,]}>31</Text>
            <Text style={[{width:'60%',}, styles.colomn,{textAlign:'left',paddingHorizontal:15,}]}>Apakah anda pernah menggunakan jarum suntik untuk obat-obatan, steroid yang tidak diresepkan dokter?</Text>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q31FalseChecked} onValueChange={(q31TrueChecked) => [setQ31FalseChecked(q31TrueChecked), setQ31TrueChecked(q31FalseChecked)]}/>
            </View>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q31TrueChecked} onValueChange={(q31FalseChecked) => [setQ31TrueChecked(q31FalseChecked), setQ31FalseChecked(q31TrueChecked)]}/>
            </View>
            
        </View>
        <View style={{flexDirection:'row',width:'100%', justifyContent:'space-between'}}>
            <Text style={[{width:'10%'}, styles.colomn,]}>32</Text>
            <Text style={[{width:'60%',}, styles.colomn,{textAlign:'left',paddingHorizontal:15,}]}>Apakah anda pernah menggunakan konsetrat faktor pembekuan?</Text>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q32FalseChecked} onValueChange={(q32TrueChecked) => [setQ32FalseChecked(q32TrueChecked), setQ32TrueChecked(q32FalseChecked)]}/>
            </View>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q32TrueChecked} onValueChange={(q32FalseChecked) => [setQ32TrueChecked(q32FalseChecked), setQ32FalseChecked(q32TrueChecked)]}/>
            </View>
            
        </View>
        <View style={{flexDirection:'row',width:'100%', justifyContent:'space-between'}}>
            <Text style={[{width:'10%'}, styles.colomn,]}>33</Text>
            <Text style={[{width:'60%',}, styles.colomn,{textAlign:'left',paddingHorizontal:15,}]}>Apakah anda pernah menderita hepatitis?</Text>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q33FalseChecked} onValueChange={(q33TrueChecked) => [setQ33FalseChecked(q33TrueChecked), setQ33TrueChecked(q33FalseChecked)]}/>
            </View>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q33TrueChecked} onValueChange={(q33FalseChecked) => [setQ33TrueChecked(q33FalseChecked), setQ33FalseChecked(q33TrueChecked)]}/>
            </View>
            
        </View>
        <View style={{flexDirection:'row',width:'100%', justifyContent:'space-between'}}>
            <Text style={[{width:'10%'}, styles.colomn,]}>34</Text>
            <Text style={[{width:'60%',}, styles.colomn,{textAlign:'left',paddingHorizontal:15,}]}>Apakah anda pernah menderita malaria?</Text>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q34FalseChecked} onValueChange={(q34TrueChecked) => [setQ34FalseChecked(q34TrueChecked), setQ34TrueChecked(q34FalseChecked)]}/>
            </View>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q34TrueChecked} onValueChange={(q34FalseChecked) => [setQ34TrueChecked(q34FalseChecked), setQ34FalseChecked(q34TrueChecked)]}/>
            </View>
            
        </View>
        <View style={{flexDirection:'row',width:'100%', justifyContent:'space-between'}}>
            <Text style={[{width:'10%'}, styles.colomn,]}>35</Text>
            <Text style={[{width:'60%',}, styles.colomn,{textAlign:'left',paddingHorizontal:15,}]}>Apakah anda pernah menderita kanker termasuk leukimia?</Text>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q35FalseChecked} onValueChange={(q35TrueChecked) => [setQ35FalseChecked(q35TrueChecked), setQ35TrueChecked(q35FalseChecked)]}/>
            </View>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q35TrueChecked} onValueChange={(q35FalseChecked) => [setQ35TrueChecked(q35FalseChecked), setQ35FalseChecked(q35TrueChecked)]}/>
            </View>
            
        </View>
        <View style={{flexDirection:'row',width:'100%', justifyContent:'space-between'}}>
            <Text style={[{width:'10%'}, styles.colomn,]}>36</Text>
            <Text style={[{width:'60%',}, styles.colomn,{textAlign:'left',paddingHorizontal:15,}]}>Apakah anda pernah bermasalah dengan jantung dan paru-paru?</Text>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q36FalseChecked} onValueChange={(q36TrueChecked) => [setQ36FalseChecked(q36TrueChecked), setQ36TrueChecked(q36FalseChecked)]}/>
            </View>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q36TrueChecked} onValueChange={(q36FalseChecked) => [setQ36TrueChecked(q36FalseChecked), setQ36FalseChecked(q36TrueChecked)]}/>
            </View>
            
        </View>
        <View style={{flexDirection:'row',width:'100%', justifyContent:'space-between'}}>
            <Text style={[{width:'10%'}, styles.colomn,]}>37</Text>
            <Text style={[{width:'60%',}, styles.colomn,{textAlign:'left',paddingHorizontal:15,}]}>Apakah anda pernah menderita pendarah atau penyakit berhubungan dengan darah?</Text>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q37FalseChecked} onValueChange={(q37TrueChecked) => [setQ37FalseChecked(q37TrueChecked), setQ37TrueChecked(q37FalseChecked)]}/>
            </View>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q37TrueChecked} onValueChange={(q37FalseChecked) => [setQ37TrueChecked(q37FalseChecked), setQ37FalseChecked(q37TrueChecked)]}/>
            </View>
            
        </View>
        <View style={{flexDirection:'row',width:'100%', justifyContent:'space-between'}}>
            <Text style={[{width:'10%'}, styles.colomn,]}>38</Text>
            <Text style={[{width:'60%',}, styles.colomn,{textAlign:'left',paddingHorizontal:15,}]}>Apakah anda pernah berhubungan seksual dengan orang yang tinggal di afrika?</Text>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q38FalseChecked} onValueChange={(q38TrueChecked) => [setQ38FalseChecked(q38TrueChecked), setQ38TrueChecked(q38FalseChecked)]}/>
            </View>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q38TrueChecked} onValueChange={(q38FalseChecked) => [setQ38TrueChecked(q38FalseChecked), setQ38FalseChecked(q38TrueChecked)]}/>
            </View>
            
        </View>
        <View style={{flexDirection:'row',width:'100%', justifyContent:'space-between'}}>
            <Text style={[{width:'10%'}, styles.colomn,]}>39</Text>
            <Text style={[{width:'60%',}, styles.colomn,{textAlign:'left',paddingHorizontal:15,}]}>Apakah anda pernah tinggal di afrika?</Text>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q39FalseChecked} onValueChange={(q39TrueChecked) => [setQ39FalseChecked(q39TrueChecked), setQ39TrueChecked(q39FalseChecked)]}/>
            </View>
            <View style={[{width:'15%'}, styles.colomn,]}>
                <CheckBox value={q39TrueChecked} onValueChange={(q39FalseChecked) => [setQ39TrueChecked(q39FalseChecked), setQ39FalseChecked(q39TrueChecked)]}/>
            </View>
            
        </View>
        <TouchableOpacity style={styles.accountBtn} onPress={onContinueTransaction}>
            <Text style={styles.textAccountBtn}>Pengajuan Donor Darah</Text>
        </TouchableOpacity>
        
        
      </ScrollView>
      
    </SafeAreaView>
    
    
    )
}

export default Kuesioner;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
      },
      headerRegister:{
          height:85,
      },
      forms:{
      },
      row: { 
        alignContent: "center",
        backgroundColor: '#ffe0f0',
        flexDirection:'row',
        width:'100%', 
        justifyContent:'space-between'
      },
      colomn: { 
        textAlign:'center', 
        borderWidth:0.5,
        fontSize:12,
        textAlignVertical:'center',
        paddingVertical:5,
        
        

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
        marginBottom:20,
      },
      textAccountBtn:{
        fontWeight:'bold',
        textAlign:'center',
        width:'100%',
        color:'white'
      },

});
