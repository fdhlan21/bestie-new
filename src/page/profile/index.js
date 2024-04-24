import React, { useEffect, useState } from 'react'
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { LeftArrow } from '../../assets'
import colors from '../../utils/colors'
import { MYAPP, getData, storeData } from '../../utils/storedata'

const ProfileScreen = ({navigation}) => {
        const kembali = () => {
        navigation.goBack();
    }

  const [data, setData] = useState({});

useEffect(() => {
getData("user").then(response => {
  setData(response);
  console.log('data user', response)
});
console.log('TES CUY');
},[])

      const signOut = () => {

        storeData('user',null);
        navigation.reset({
          index:0,
          routes:[{name:'HalamanSplash'}]
        })
        Alert.alert(MYAPP,'Berhasil Logout');
    
  }
 
  return (
    <View style={{flex:1, backgroundColor:colors.primary}}>
     
     <View style={{flexDirection:'row', padding:10, backgroundColor:colors.secondary, justifyContent:'center', bottom:30}}>
     <View style={{}}>
     <TouchableOpacity onPress={kembali} style={{right:140, top:25}}>
     <Image style={{height:30, width:30, tintColor:'white'}} source={LeftArrow}/>
     </TouchableOpacity>
        
        <Text style={{fontFamily:'Poppins-SemiBold', color:'white'}}>Profile</Text>
     </View>
     </View>

   <View style={{padding:10,}}>
<View style={{padding:10, backgroundColor:'white'}}>
<Text style={{fontFamily:'Poppins-Regular'}}>Nama : <Text style={{fontFamily:'Poppins-SemiBold'}}>{data.nama}</Text></Text>
<Text style={{fontFamily:'Poppins-Regular', marginTop:10}}>Tanggal Lahir : <Text style={{fontFamily:'Poppins-SemiBold'}}>{data.tanggallahir}</Text></Text>
</View>
   </View>
     
     <View style={{padding:10}}>
<TouchableOpacity onPress={signOut} style={{padding:10, backgroundColor:colors.danger}}>
    <Text style={{fontFamily:'Poppins-SemiBold', color:'white', textAlign:'center'}}>Keluar dari aplikasi</Text>
</TouchableOpacity>
     </View>


    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})