import React, {useState} from 'react'
import { Text, StyleSheet, View } from 'react-native'

const Greeting = ({jnsKelamin, namaLengkap}) => {

    const [panggilan, setPanggilan] = useState([]);

    const GreetingComp = () => {
        let now = new Date();
        let night = '18:00:00';
        let afternoon = '16:00:00';
        let morning = '06:00:00';
        let afternoon2 = '12:00:00';
        let dtNight = (now.getMonth()+1) + "/" + now.getDate() + "/" + now.getFullYear() + " " + night;
        let dtMorning = (now.getMonth()+1) + "/" + now.getDate() + "/" + now.getFullYear() + " " + morning;
        let dtAfternoon = (now.getMonth()+1) + "/" + now.getDate() + "/" + now.getFullYear() + " " + afternoon;
        let dtAfternoon2 = (now.getMonth()+1) + "/" + now.getDate() + "/" + now.getFullYear() + " " + afternoon2;
        let valDtNight = new Date(dtNight);
        let valDtMorning = new Date(dtMorning);
        let valDtAfternoon = new Date(dtAfternoon);
        let valDtAfternoon2 = new Date(dtAfternoon2);

      

        if(jnsKelamin === 'Laki-laki'){
            setPanggilan('Saudara')
        }else{
            setPanggilan('Saudari')
        }
         
        if(now >= valDtNight && now <= valDtMorning){
            return(
                <Text style={styles.welcomeText}>Selamat Malam, {panggilan}</Text>
            )
        }else if (now >= valDtMorning && now <= valDtAfternoon2) {
            return(
                <Text style={styles.welcomeText}>Selamat Pagi, {panggilan}</Text>
            )
        } else if(now >= valDtAfternoon && now <= valDtNight){
            return(
                <Text style={styles.welcomeText}>Selamat Sore, {panggilan}</Text>
            )
        } else if(now >= valDtAfternoon2 && now <= valDtAfternoon){
            return(
                <Text style={styles.welcomeText}>Selamat Siang, {panggilan}</Text>
            )
        }else{
            return(
                <Text style={styles.welcomeText}>Selamat Malam, {panggilan}</Text>
            )
        }
    }
    return(
        <View>
            <GreetingComp/>
            <Text style={{marginBottom:20, fontSize:25, fontWeight:'bold', paddingLeft:20,}}>{namaLengkap}</Text>
        </View>
    )
}

export default Greeting;

const styles = StyleSheet.create({
    welcomeText:{
        fontSize:14,
        paddingLeft:20,
        paddingTop:20,
    
      },
})

