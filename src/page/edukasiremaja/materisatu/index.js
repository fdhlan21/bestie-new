import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import Pdf from 'react-native-pdf';
import { LeftArrow } from '../../../assets';
import colors from '../../../utils/colors';

const MateriSatu = ({navigation}) => {
    const kembali = () => {
        navigation.goBack();
    }

const source = require('../../../../android/app/src/main/assets/pdf/1_pkhs.pdf')


  return (
    <View style={{flex:1, backgroundColor:colors.primary}}>
     
     <View style={{flexDirection:'row', padding:10, backgroundColor:colors.secondary, justifyContent:'center', bottom:0, height:50}}>
     <View style={{}}>
     <TouchableOpacity onPress={kembali} style={{right:110, top:0}}>
     <Image style={{height:30, width:30, tintColor:'white'}} source={LeftArrow}/>
     </TouchableOpacity>
        
        <Text style={{fontFamily:'Poppins-SemiBold', color:'white', bottom:25}}>Materi 1 - PKHS</Text>
     </View>
     </View>
<ScrollView contentContainerStyle={{flex:1}}>
    <Pdf style={{flex:1, padding:0,left:0, backgroundColor:'white', alignItems:'center', width:'100%', height:Dimensions.get('window').height, bottom:0}} source={source} 
    onLoadComplete={(numberofPages, filePath) => {
        console.log(`Number of pages: ${numberofPages}`);
    }}
    onPageChanged={(page,numberOfPages) => {
        console.log(`current page: ${page}`);
    }}
    onError={(error) => {
        console.log(error);
    }}
    onPressLink={(uri) => {
        console.log(`Link pressed: ${uri}`);
    }}
    trustAllCerts={false}
    horizontal={false}
/>
</ScrollView>
    </View>
  )
}

export default MateriSatu

const styles = StyleSheet.create({})