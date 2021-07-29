import React  from 'react'
import { Text, StyleSheet, View } from 'react-native'


const StockDarah = ({namaGoldar, stokDarah}) => {
      
    return(
        <View style={styles.stokDarahView}>
            <Text style={styles.textGoldarView}>{namaGoldar}</Text>
            <View style={{width:'100%', fontWeight:'bold', height:'100%', marginTop:15}}>
                <Text style={{width:'100%', textAlign:'center', fontWeight:'bold', fontSize:36,}}>{stokDarah}</Text>
                <Text style={{width:'80%', alignSelf:'center', textAlign:'center', fontWeight:'bold',fontSize:15,marginTop:10}}>Kantong Darah</Text>
            </View>
        </View>
    )
}

export default StockDarah;

const styles = StyleSheet.create({
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
})
