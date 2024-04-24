import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { LeftArrow } from '../../assets'
import colors from '../../utils/colors'

const EdukasiRemaja = ({navigation}) => {
    const kembali = () => {
        navigation.goBack();
    }

 
  return (
    <View style={{flex:1, backgroundColor:colors.primary}}>
     
     <View style={{flexDirection:'row', padding:10, backgroundColor:colors.secondary, justifyContent:'center', bottom:30}}>
     <View style={{}}>
     <TouchableOpacity onPress={kembali} style={{right:105, top:25}}>
     <Image style={{height:30, width:30, tintColor:'white'}} source={LeftArrow}/>
     </TouchableOpacity>
        
        <Text style={{fontFamily:'Poppins-SemiBold', color:'white'}}>Edukasi Remaja</Text>
     </View>
     </View>
<ScrollView>
    <View style={{padding:10}}>


<TouchableOpacity onPress={()=> navigation.navigate('HalamanMateriSatu')} style={{padding:10, backgroundColor:colors.secondary, borderRadius:5}}>
 <Text style={{fontFamily:'Poppins-Regular', color:'white', textAlign:'center'}}>Materi 1 - PKHS</Text>
</TouchableOpacity>


<TouchableOpacity  onPress={()=> navigation.navigate('HalamanMateriDua')} style={{padding:10, backgroundColor:colors.secondary, borderRadius:5, marginTop:20}}>
 <Text style={{fontFamily:'Poppins-Regular', color:'white', textAlign:'center'}}>Materi 2 - Gizi</Text>
</TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate('HalamanMateriTiga')} style={{padding:10, backgroundColor:colors.secondary, borderRadius:5, marginTop:20}}>
 <Text style={{fontFamily:'Poppins-Regular', color:'white', textAlign:'center'}}>Materi 3 - Napza</Text>
</TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate('HalamanMateriEmpat')} style={{padding:10, backgroundColor:colors.secondary, borderRadius:5, marginTop:20}}>
 <Text style={{fontFamily:'Poppins-Regular', color:'white', textAlign:'center'}}>Materi 4 - Kesehatan Reproduksi</Text>
</TouchableOpacity>

<TouchableOpacity  onPress={()=> navigation.navigate('HalamanMateriLima')} style={{padding:10, backgroundColor:colors.secondary, borderRadius:5, marginTop:20}}>
 <Text style={{fontFamily:'Poppins-Regular', color:'white', textAlign:'center'}}>Materi 5 - IMS,HIV AIDS, Hepatitis B dan C</Text>
</TouchableOpacity>

<TouchableOpacity  onPress={()=> navigation.navigate('HalamanMateriEnam')} style={{padding:10, backgroundColor:colors.secondary, borderRadius:5, marginTop:20}}>
 <Text style={{fontFamily:'Poppins-Regular', color:'white', textAlign:'center'}}>Materi 6 - Kekerasan dan Kecelakaan pada Remaja</Text>
</TouchableOpacity>

<TouchableOpacity  onPress={()=> navigation.navigate('HalamanMateriTujuh')} style={{padding:10, backgroundColor:colors.secondary, borderRadius:5, marginTop:20}}>
 <Text style={{fontFamily:'Poppins-Regular', color:'white', textAlign:'center'}}>Materi 7 - Kesehatan Jwa</Text>
</TouchableOpacity>

<TouchableOpacity  onPress={()=> navigation.navigate('HalamanMateriDelapan')} style={{padding:10, backgroundColor:colors.secondary, borderRadius:5, marginTop:20}}>
 <Text style={{fontFamily:'Poppins-Regular', color:'white', textAlign:'center'}}>Materi 8 - Anemia new</Text>
</TouchableOpacity>

<TouchableOpacity  onPress={()=> navigation.navigate('HalamanMateriSembilan')} style={{padding:10, backgroundColor:colors.secondary, borderRadius:5, marginTop:20}}>
 <Text style={{fontFamily:'Poppins-Regular', color:'white', textAlign:'center'}}>Materi 9 - Stunting</Text>
</TouchableOpacity>


    </View>
</ScrollView>
    </View>
  )
}

export default EdukasiRemaja

const styles = StyleSheet.create({})