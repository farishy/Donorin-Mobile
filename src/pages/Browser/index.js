import React, {useState, useEffect} from 'react';
import { WebView } from 'react-native-webview'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Browser = ({route,navigation}) => {

    const {idArtikel} = route.params

    return(
        <WebView style={{marginTop:35,}} source={{ uri: 'http://192.168.100.5/donorin/public/home/postMobile/'+idArtikel  }} />
    )
};

export default Browser;
