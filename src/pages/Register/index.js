import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, StatusBar, ScrollView, TextInput, ImageBackground, Button, SafeAreaView, TouchableOpacity, Modal} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useForm} from '../../utils';

import DateTimePickerModal from "react-native-modal-datetime-picker";
import CheckBox from '@react-native-community/checkbox';
import AwesomeAlert from 'react-native-awesome-alerts';

import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = ({navigation}) => {

    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
        };

  const [form, setForm] = useForm({
      namaLengkap: '',
      tempatLahir: '',
      tglLahir: '',
      jnsKelamin: '',
      alamat:'',
      noKTP:'',
      noTelepon:'',
      email:'',
      password:'',
      repassword:'',
      idGoldar:'',
      cekNamaLengkap:'',
      cekTempatLahir:'',
      cekTglLahir:'',
      cekAlamat:'',
      cekNoKTP:'',
      cekNoTelepon:'',
      cekEmail:'',
      cekPassword:'',
      cekRepassword:'',
      profile: 'data:image/png;base64,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'
    });

  const [tempatLahir, setTempatLahir] = useState('Pilih Tempat Lahir');
  const [goldar, setGoldar] = useState('Pilih Golongan Darah');
  const [provinsi, setProvinsi] = useState([
    'Aceh', 'Bali', 'Banten', 'Bengkulu', 'Daerah Istimewa Yogyakarta', 'Daerah Khusus Ibukota Jakarta', 'Gorontalo', 'Jambi', 'Jawa Barat', 'Jawa Tengah', 'Jawa Timur',
    'Kalimantan Barat', 'Kalimantan Selatan', 'Kalimantan Tengah', 'Kalimantan Timur', 'Kalimantan Utara', 'Kepulauan Bangka Belitung', 'Kepulauan Riau', 'Lampung', 'Maluku',
    'Maluku Utara', 'Nusa Tenggara Barat', 'Nusa Tenggara Timur', 'Papua', 'Papua Barat', 'Riau', ' Sulawesi Barat', 'Sulawesi Selatan', 'Sulawesi Tengah', 'Sulawesi Tenggara',
    'Sulawesi Utara', 'Sumatra Barat', 'Sumatra Selatan', 'Sumatra Utara'
  ]) 
  
  const [goldarOption, setGoldarOption] = useState([
      'Belum diketahui', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-', 
  ])

  const [showAlert, setShowAlert] = useState(false);
  const [showAlert2, setShowAlert2] = useState(false);

  const [provinsiModal, setProvinsiModal] = useState(false);
  const [goldarModal, setGoldarModal] = useState(false);

  const [menChecked, setMenChecked] = useState(true);
  const [womenChecked, setWomenChecked] = useState(false);
  const genderUser = () =>{
    if(menChecked){
      form.jnsKelamin = 'Laki-laki'
    }else{
      form.jnsKelamin = 'Perempuan'
    }
  }

  const goldarUser = () => {
    if(goldar == 'O-'){
        form.idGoldar = '8'
    }else if(goldar == 'A+'){
        form.idGoldar = '1'
    }else if(goldar == 'B+'){
        form.idGoldar = '2'
    }else if(goldar == 'AB+'){
        form.idGoldar = '3'
    }else if(goldar == 'O+'){
        form.idGoldar = '4'
    }else if(goldar == 'A-'){
        form.idGoldar = '5'
    }else if(goldar == 'B-'){
        form.idGoldar = '6'
    }else if(goldar == 'AB-'){
        form.idGoldar = '7'
    }else{
        form.idGoldar = '0'
    }
  }

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const now = new Date()

  const handleConfirm = (date) => {
    hideDatePicker();
    const day   = date.getDate();
    const month = date.getMonth()+1;
    const year  = date.getFullYear();
    //set(day+'/'+month+'/'+year)
    setForm('tglLahir', year+'-'+month+'-'+day)
  };


  const cekValidNama = () => {
    if (form.namaLengkap.length < 1) {
      setForm('cekNamaLengkap','*Nama tidak boleh kosong')
    }
    else if(form.cekNamaLengkap.length >0){
      setForm('cekNamaLengkap','')
    }
  }

  const cekValidNoKTP = () => {
    if (form.noKTP.length < 1) {
      setForm('cekNoKTP','*NIK tidak boleh kosong')
    }else if(form.noKTP.length != 16){
        setForm('cekNoKTP','*NIK yang anda masukkan tidak valid')
    }
    else if(form.cekNoKTP.length >0){
      setForm('cekNoKTP','')
    }
  }

  const cekValidTempatLahir = () => {
    if (form.tempatLahir.length < 1) {
      setForm('cekTempatLahir','*Tolong pilih tempat lahir')
    }
    else if(form.cekTempatLahir.length >0){
      setForm('cekTempatLahir','')
    }
  }

  const cekValidTanggalLahir = () => {
    if (form.tglLahir.length < 1) {
      setForm('cekTglLahir','*Tolong pilih tanggal lahir')
    }
    else if(form.cekTglLahir.length >0){
      setForm('cekTglLahir','')
    }
  }

  const cekValidAlamat = () => {
    if (form.alamat.length < 1) {
      setForm('cekAlamat','*Alamat tidak boleh kosong')
    }
    else if(form.cekAlamat.length >0){
      setForm('cekAlamat','')
    }
  }

  const cekValidNoTelepon = () => {
    const regexTlp = new RegExp(/^(0|08|08[0-9]{6,12})$/)
    if (form.noTelepon.length < 1) {
      setForm('cekNoTelepon','*Nomor telepon tidak boleh kosong')
    }else if(regexTlp.test(form.noTelepon) === false){
        setForm('cekNoTelepon','*Nomor telepon yang anda masukkan tidak valid')
    }
    else if(form.cekNoTelepon.length >0){
      setForm('cekNoTelepon','')
    }
  }

  const cekValidEmail = () => {
    let regexEmail = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    if (form.email.length < 1) {
      setForm('cekEmail','*Email tidak boleh kosong')
    }else if(regexEmail.test(form.email) === false){
        setForm('cekEmail','*Email yang anda masukkan tidak valid')
    }else if(form.cekEmail.length >0){
      setForm('cekEmail','')
    }
  }

  const cekValidPassword = () => {
    if (form.password.length < 1) {
      setForm('cekPassword','*Password tidak boleh kosong')
    }
    else if(form.cekPassword.length >0){
      setForm('cekPassword','')
    }
  }

  const cekValidRepassword = () => {
    if (form.repassword.length < 1) {
      setForm('cekRepassword','*Harap masukkan password kembali untuk validasi')
    }else if(form.repassword != form.password){
        setForm('cekRepassword', 'Password yang anda masukkan tidak sama dengan sebelumnya')
    }
    else if(form.cekRepassword.length >0){
      setForm('cekRepassword','')
    }
  }

  const onContinue = () => {
   
   cekValidTanggalLahir()
   cekValidTempatLahir()
    
    if(form.cekNamaLengkap == '' && form.cekAlamat == '' && form.cekNoKTP == '' && form.cekNoTelepon == '' &&
    form.cekEmail == '' && form.cekPassword == '' && form.cekRepassword == '' && form.tglLahir != '' && form.tempatLahir != ''){
        //console.log(true)
        let emaillower = String(form.email).toLowerCase()
        setForm('email', emaillower)
        setForm('cekTempatLahir','')
        setForm('cekTglLahir','')
        axios.get('http://192.168.100.5/donorinAPI/public/akunDonorbyEmail/'+form.email, axiosConfig)
        .then((res) => {
         if(res){
            setShowAlert2(!showAlert2)
         }
        }).catch((error) =>{
            axios.post('http://192.168.100.5/donorinAPI/public/register', form, axiosConfig)
             .then((res2) => {
                //console.log(res2)
                 //console.log(form)
                axios.post('http://192.168.100.5/donorinAPI/public/login', form, axiosConfig)
                .then((res3) =>{
                    //console.log('berhasil login '+res3.data.message)
                    var items = {}
                    items.idAkun = res3.data.idAkun
                    items.token = res3.data.token
                    AsyncStorage.setItem('@storage_Key', JSON.stringify(items));
                    navigation.replace('MainApp')
                }).catch((error3) =>{
                    console.log(error3)
                })
             }).catch((error2) =>{
                 console.log(error2)
             })
        })
    }else{
        console.log(false)
        setShowAlert(!showAlert)
    }
  }

  useEffect(() => {
      genderUser()
      goldarUser()
      console.log(form.namaLengkap, form.tempatLahir, form.tglLahir, form.jnsKelamin, form.alamat, form.noKTP, form.noTelepon, form.email, form.password, form.repassword, form.idGoldar)
    //   return () => {
    //       cleanup
    //   }
  }, [form, genderUser, goldarUser])
    
    return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#D32A2A', '#CE1212']}  style={styles.headerRegister}>
        <Text style={{paddingHorizontal:20, position:'absolute', bottom:15, fontSize:17, fontWeight:'bold', color:'white'}}>Register</Text>
      </LinearGradient>
      <ScrollView style={styles.forms}>
        <Text style={styles.label}>Nomor Induk Kependudukan</Text>
        <TextInput
            onChangeText={value => setForm('noKTP', value)}
            value={form.noKTP}
            placeholder="Masukkan Nomor Induk Kependudukan"
            style={styles.inputText}
            onEndEditing={cekValidNoKTP}
            
            placeholderTextColor="gray"

        />
        <Text style={{color:'red', fontSize:12, marginTop:-15, marginLeft:5, marginBottom:20,}}>{form.cekNoKTP}</Text>
        <Text style={styles.label}>Nama Lengkap</Text>
        <TextInput
            onChangeText={value => setForm('namaLengkap', value)}
            value={form.namaLengkap}
            placeholder="Masukkan nama lengkap"
            style={styles.inputText}
            onEndEditing={cekValidNama}
            placeholderTextColor="gray"

        />
        <Text style={{color:'red', fontSize:12, marginTop:-15, marginLeft:5, marginBottom:20,}}>{form.cekNamaLengkap}</Text>
        <View style={{flexDirection:'row', width:'100%'}}>
            <View style={{width:'46%', marginRight:5,}}>
                <Text style={styles.label}>Tempat Lahir</Text>
                <TouchableOpacity style={styles.dropdown} onPress={()=>setProvinsiModal(!provinsiModal)}>
                    <Text numberOfLines={1} ellipsizeMode='tail' style={styles.textDropdown}>{tempatLahir}</Text>
                    <Image source={require('../../assets/dropdown.png')} style={styles.iconDropDown} />
                </TouchableOpacity>
                <Text style={{color:'red', fontSize:12, marginTop:0, marginLeft:5, marginBottom:20,}}>{form.cekTempatLahir}</Text>
            </View>
            <View style={{width:'46%', marginRight:5,}}>
                <Text style={styles.label}>Tanggal Lahir Lahir</Text>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={styles.calender} onPress={showDatePicker}>
                        <Image source={require('../../assets/calendar.png')} style={{width:20, height:20,}} />
                    </TouchableOpacity>
                    <TextInput
                        onChangeText={value => setForm('tglLahir', value)}
                        value={form.tglLahir}
                        placeholder="yyyy-mm-dd"
                        style={[styles.inputText, {width:125, borderBottomWidth:0,}]}
                        editable={false}
                        onEndEditing={cekValidTanggalLahir}
                        placeholderTextColor="gray"
                    />
                </View>
                <Text style={{color:'red', fontSize:12, marginTop:-15, marginLeft:5, marginBottom:20,}}>{form.cekTglLahir}</Text>
                
            </View>
        </View>
        
        

        <Modal
            animationType="slide"
            transparent={true}
            visible={provinsiModal}
            onRequestClose={() => {
                setProvinsiModal(!provinsiModal);
            }}
        >
            <View style={styles.modalContainer}>
                <View style={styles.pickerContainer}>
                    <View style={styles.headerModal}>
                    <Text style={styles.titleHeader}>Pilih Tempat Lahir</Text>
                    <TouchableOpacity onPress={() => setProvinsiModal(false)}>
                        <Image style={styles.close} source={require('../../assets/cancel.png')}/>
                    </TouchableOpacity>
                    </View>
                    <ScrollView style={styles.itemController}>
                    {provinsi.map((item, index) => {
                    return(
                        <TouchableOpacity 
                            key={index}
                            onPress={()=>[setTempatLahir(item), setProvinsiModal(false), setForm('tempatLahir', item)]}
                            style={{width:'100%',
                            shadowColor: '#000000',
                            shadowOffset: {
                                width: 0,
                                height: 7,
                            },
                            shadowOpacity: 0.43,
                            shadowRadius: 9.51,
                            elevation: 1,
                            }}
                            >
                            <Text style={{textAlign:'center', paddingHorizontal:20, fontSize:18, paddingVertical:10, backgroundColor:'white'}}>{item}</Text>
                            </TouchableOpacity>
                    )
                    })}
                    
                    </ScrollView>
                </View>
            </View>
        </Modal>
        <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            maximumDate={now.setMonth(now.getMonth() - 203.8448)}
          />

        <Text style={styles.label}>Jenis Kelamin</Text>
        <View style={{flexDirection:'row', width:'100%', marginTop:10, marginBottom:20,}}>
            <CheckBox value={menChecked} onValueChange={(womenChecked) => [setMenChecked(womenChecked), setWomenChecked(menChecked)]} /><Text style={[styles.label, {marginTop:8, fontWeight:'normal', marginRight:20,}]}>Laki-laki</Text>
            <CheckBox value={womenChecked} onValueChange={(menChecked) => [setWomenChecked(menChecked), setMenChecked(womenChecked)]} /><Text style={[styles.label, {marginTop:8, fontWeight:'normal'}]}>Perempuan</Text>
        </View>
        <Text style={styles.label}>Alamat</Text>
        <TextInput
            onChangeText={value => setForm('alamat', value)}
            value={form.alamat}
            placeholder="Masukkan alamat sesuai KTP"
            style={styles.inputText}
            textContentType="fullStreetAddress"
            onEndEditing={cekValidAlamat}
            
            placeholderTextColor="gray"
        />
        <Text style={{color:'red', fontSize:12, marginTop:-15, marginLeft:5, marginBottom:20,}}>{form.cekAlamat}</Text>
        <Text style={styles.label}>Nomor Telepon</Text>
        <TextInput
            onChangeText={value => setForm('noTelepon', value)}
            value={form.noTelepon}
            placeholder="Masukkan nomor yang dapat dihubungi"
            style={styles.inputText}
            textContentType="telephoneNumber"
            keyboardType="number-pad"
            onEndEditing={cekValidNoTelepon}
            placeholderTextColor="gray"
        />
        <Text style={{color:'red', fontSize:12, marginTop:-15, marginLeft:5, marginBottom:20,}}>{form.cekNoTelepon}</Text>
        <Text style={styles.label}>Golongan Darah</Text>
        <TouchableOpacity style={[styles.dropdown, {marginBottom:20,}]} onPress={()=>setGoldarModal(!goldarModal)}>
            <Text numberOfLines={1} ellipsizeMode='tail' style={[styles.textDropdown, {width:'100%'}]}>{goldar}</Text>
            <Image source={require('../../assets/dropdown.png')} style={styles.iconDropDown} />
        </TouchableOpacity>
        <Modal
            animationType="slide"
            transparent={true}
            visible={goldarModal}
            onRequestClose={() => {
                setProvinsiModal(!goldarModal);
            }}
        >
            <View style={styles.modalContainer}>
                <View style={styles.pickerContainer}>
                    <View style={styles.headerModal}>
                    <Text style={styles.titleHeader}>Pilih Golongan Darah</Text>
                    <TouchableOpacity onPress={() => setGoldarModal(false)}>
                        <Image style={styles.close} source={require('../../assets/cancel.png')}/>
                    </TouchableOpacity>
                    </View>
                    <ScrollView style={styles.itemController}>
                    {goldarOption.map((item, index) => {
                    return(
                        <TouchableOpacity 
                            key={index}
                            onPress={()=>[setGoldar(item), setGoldarModal(false)]}
                            style={{width:'100%',
                            shadowColor: '#000000',
                            shadowOffset: {
                                width: 0,
                                height: 7,
                            },
                            shadowOpacity: 0.43,
                            shadowRadius: 9.51,
                            elevation: 1,
                            }}
                            >
                            <Text style={{textAlign:'center', paddingHorizontal:20, fontSize:18, paddingVertical:10, backgroundColor:'white'}}>{item}</Text>
                            </TouchableOpacity>
                    )
                    })}
                    
                    </ScrollView>
                </View>
            </View>
        </Modal>
        <Text style={styles.label}>Email</Text>
        <TextInput
            onChangeText={value => setForm('email', value)}
            value={form.email}
            placeholder="Masukkan email yang aktif"
            style={styles.inputText}
            textContentType="emailAddress"
            keyboardType="email-address"
            onEndEditing={cekValidEmail}
            placeholderTextColor="gray"
        />
        <Text style={{color:'red', fontSize:12, marginTop:-15, marginLeft:5, marginBottom:20,}}>{form.cekEmail}</Text>
        <Text style={styles.label}>Password</Text>
        <TextInput
            onChangeText={value => setForm('password', value)}
            value={form.password}
            placeholder="Masukkan password yang aman"
            style={styles.inputText}
            textContentType="password"
            secureTextEntry
            onEndEditing={cekValidPassword}
            placeholderTextColor="gray"
        />
        <Text style={{color:'red', fontSize:12, marginTop:-15, marginLeft:5, marginBottom:20,}}>{form.cekPassword}</Text>
        <Text style={styles.label}>Konfirmasi Password</Text>
        <TextInput
            onChangeText={value => setForm('repassword', value)}
            value={form.repassword}
            placeholder="Masukkan kembali password"
            style={styles.inputText}
            textContentType="password"
            secureTextEntry
            onEndEditing={cekValidRepassword}
            placeholderTextColor="gray"
        />
        <Text style={{color:'red', fontSize:12, marginTop:-15, marginLeft:5, marginBottom:20,}}>{form.cekRepassword}</Text>
        <Button
            title="Selanjutnya"
            color='#F05454'
            onPress={onContinue}
        />
        <View style={{height:20,}}></View>
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
        <AwesomeAlert
          show={showAlert2}
          showProgress={false}
          title="Terjadi Kesalahan"
          message="Email yang anda masukkan telah terdaftar"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          confirmText="Login"
          cancelText="Kembali"
          showConfirmButton={true}
          showCancelButton={true}
          onCancelPressed={()=>
              setShowAlert2(false)
          }
          onConfirmPressed={()=>{
              navigation.replace('Login')
          }}
        />
      </ScrollView>
      
    </SafeAreaView>
    
    
    )
}

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
      },
      headerRegister:{
          height:85,
          marginBottom:20,
      },
      forms:{
        padding:20,
        paddingTop:5,
        marginBottom:30,
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

    },
    label:{
        marginLeft:5, fontWeight:'bold', fontSize:12,
        marginTop:0,
    },
    dropdown: {
        paddingVertical:3,
        paddingHorizontal:15,
        backgroundColor: '#F8F8F8',
        alignSelf: 'flex-start',
        borderRadius: 5,
        alignItems: 'center',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 0,
        flexDirection: 'row',
        marginBottom:10,
        height:32,
        marginTop:10,
      },
      textDropdown: {
        width:'88%',
        height:15,
        fontSize:12,
      },
      iconDropDown: {
        width:10,
        height:10,
        marginTop:3,
      },
      calender:{
        paddingVertical:3,
        paddingHorizontal:10,
        backgroundColor: '#F8F8F8',
        alignSelf: 'flex-start',
        borderRadius: 5,
        alignItems: 'center',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 0,
        flexDirection: 'row',
        marginBottom:10,
        height:32,
        marginTop:10,
        marginRight:5,
      },
      modalContainer:{
        flex:2,
        backgroundColor:'rgba(52, 52, 52, 0.5)'
      },
      pickerContainer:{
        flex:2,
        backgroundColor:'white',
        width:'100%',
        height:'50%',
        position:'absolute',
        bottom:0,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 25,
      },
      picker:{
        height:50,
        width:'100%',
      },
      itemController:{
        marginVertical:20
      },
      headerModal:{
        width:'100%', flexDirection:'row', justifyContent:'space-around', marginTop:20
      },
      titleHeader:{
        width:'72%', alignSelf:'flex-start', fontSize:18, fontWeight:'bold'
      },
      close:{
        height:25, width:25, alignSelf:'flex-end'
      },
});
