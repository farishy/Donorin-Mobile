import React from 'react'
import { Text, ImageBackground, Image, StyleSheet, View } from 'react-native'

const HeaderHome = ({profile}) => {
    const Header = () => {
        let now = new Date();
        let night = '18:00:00';
        let afternoon = '16:00:00';
        let morning = '06:00:00';
        let dtNight = (now.getMonth()+1) + "/" + now.getDate() + "/" + now.getFullYear() + " " + night;
        let dtMorning = (now.getMonth()+1) + "/" + now.getDate() + "/" + now.getFullYear() + " " + morning;
        let dtAfternoon = (now.getMonth()+1) + "/" + now.getDate() + "/" + now.getFullYear() + " " + afternoon;
        let valDtNight = new Date(dtNight);
        let valDtMorning = new Date(dtMorning);
        let valDtAfternoon = new Date(dtAfternoon);
         
        if(now >= valDtNight && now <= valDtMorning){
            return(
                <ImageBackground source={require('../../assets/malam.png')} style={styles.header}>
                    <Text style={styles.headerTitle}>Donorin</Text>
                    <Image style={styles.headerProfile} source={{uri:profile}} />
                </ImageBackground>
            )
        }else if (now >= valDtMorning && now <= valDtAfternoon) {
            return(
                <ImageBackground source={require('../../assets/pagi.png')} style={styles.header}>
                    <Text style={styles.headerTitle}>Donorin</Text>
                    <Image style={styles.headerProfile} source={{uri:profile}} />
                </ImageBackground>
            )
        }else if(now >= valDtAfternoon && now <= valDtNight){
            return(
                <ImageBackground source={require('../../assets/sore.png')} style={styles.header}>
                    <Text style={styles.headerTitle}>Donorin</Text>
                    <Image style={styles.headerProfile} source={{uri:profile}} />
                </ImageBackground>
            )
        }else{
            return(
                <ImageBackground source={require('../../assets/malam.png')} style={styles.header}>
                    <Text style={styles.headerTitle}>Donorin</Text>
                    <Image style={styles.headerProfile} source={{uri:profile}} />
                </ImageBackground>
            )
        }
    }
    return(
        <View>
            <Header />
        </View>
    )
}

export default HeaderHome;

const styles = StyleSheet.create({
    header:{
        color: 'white',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#8E1A1A',
        paddingTop: 40,
    
    
      },
      headerTitle:{
        color: 'white',
        fontSize:22,
        fontWeight: 'bold',
        alignSelf:'center',
        marginBottom:10,
    
      },
      headerProfile:{
        width:40,
        height:40,
        borderRadius: 40/2,
        marginBottom:10,
    
      },
})

