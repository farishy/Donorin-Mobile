import React, {useState} from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native'

  

const Faq = ({icon, judulFaq, kontenFaq}) => {
    const [faqHideShow, setFaqHideShow] = useState(false)
    return(
        <View>
            <TouchableOpacity activeOpacity={0.5} style={styles.faqView} onPress={()=> setFaqHideShow(!faqHideShow)}>
                <Text style={{marginLeft:15,marginRight:25,textAlign:'justify', fontWeight:'bold',width:'72%'}}>{judulFaq}</Text>
                <Image style={styles.imageTransaction} source={require('../../assets/arrow_down.png')}/>
            </TouchableOpacity>
            {
            faqHideShow ? (
                <View style={[styles.faqView,]} >
                <Image style={styles.imageTransaction} source={{uri:icon}}/>
                <Text style={{marginRight:20,textAlign:'justify', fontSize:12, width:'79%'}}>{kontenFaq}</Text>
                </View>
            ) : null
            }
        </View>  
    )
}

export default Faq;

const styles = StyleSheet.create({
    imageTransaction:{
        height:25,
        width:25,
        marginLeft:15,
        marginRight:10,
        marginTop:8,
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
})
