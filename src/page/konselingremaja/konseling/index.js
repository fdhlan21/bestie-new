import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Alert, Image, Linking, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KonselingIcons, LeftArrow } from '../../../assets'
import colors from '../../../utils/colors'
import { KonselingRemajaURLLOGIN, MYAPP, getData, storeData } from '../../../utils/storedata'

const Konseling = ({navigation}) => {
   const kembali = () => {
        navigation.goBack();
    }
const [form, setForm] = useState({
  nik:'',
  nama_sekolah:'',
  nama_desa:''
})
 const [data, setData] = useState({});
   const [buttonPressCount, setButtonPressCount] = useState(0);

useEffect(() => {
getData("konseling").then(response => {
  setData(response);
  console.log('data user', response)
});
console.log('TES CUY');
},[])

   const openWebsite = () => {
    const websiteUrl = 'https://wa.me/628819571011'; // Replace with your desired website URL
   
    Linking.openURL(websiteUrl)
      .catch(error => console.log(error));
       
  };

const handleInputChange = (value, fieldName) => {
  if (fieldName === 'nik') {
    if (/^\d+$/.test(value)) {
      setForm({...form, nik: value});
    } else {
      setForm({...form, nik: ''});
      Alert.alert(MYAPP, 'NIK hanya berisi nomor!');
    }
  } else {
    setForm({...form, [fieldName]: value});
  }
}

const handleKonseling = () => {
if ((form.nik.length == 0) || (form.nama_sekolah.length == 0) || (form.nama_desa.length == 0)) {
   Alert.alert(MYAPP, 'NIK, Nama Sekolah Dan Nama Desa Belum Di Isi!');
} else if (form.nik.length <16) {
   Alert.alert(MYAPP, 'NIK Tidak Boleh Kurang Dari 16 Nomor!');
} else if(form.nik.length > 16) {
    Alert.alert(MYAPP, 'NIK Tidak Boleh Lebih Dari 16 Nomor!');
  } else {
    

  console.log(form);
  axios
  .post(KonselingRemajaURLLOGIN, form)
  .then(response => {
    console.log(response.data);
    if (response.data==200) {
     Alert.alert(MYAPP,'Nik, Nama Sekolan dan Nama Desa belum terdaftar!')
    } else {
      console.log(response.data);
      storeData('konseling', response.data);
      openWebsite()
      setButtonPressCount(prevCount => {
  const newCount = prevCount + 1;
  console.log('Button Press Count:', newCount);
  return newCount;
});
    }
 
  })
  .catch(error => {
    console.error(error);
  })
  }



}

  return (
    <View style={{flex:1, backgroundColor:colors.primary}}>
  
<View style={{flexDirection:'row', padding:10, backgroundColor:colors.secondary, justifyContent:'center', bottom:0, height:50}}>
     <View style={{}}>
     <TouchableOpacity onPress={kembali} style={{right:100, top:0}}>
     <Image style={{height:30, width:30, tintColor:'white'}} source={LeftArrow}/>
     </TouchableOpacity>
        
        <Text style={{fontFamily:'Poppins-SemiBold', color:'white', bottom:25}}>Konseling Remaja</Text>
     </View>
     </View>

<ScrollView>
  <View style={{padding:10, alignItems:'center', marginTop:10}}>
    <Image style={{height:130, width:130}} source={KonselingIcons}/>
    <Text style={{fontFamily:'Poppins-Regular', fontSize:12, marginTop:30, textAlign:'center'}}>Masukan NIK, Nama Sekolah dan Nama Desa, Untuk Konseling</Text>
  </View>


<View style={{padding:10}}>

{/* LOGIN UNTUK KONSELING REMAJA */}

{/* MASUKAN NIK */}
<View style={{padding:10}}>
  <Text style={{fontFamily:'Poppins-Regular'}}>NIK:</Text>
</View>

<TextInput style={{backgroundColor:'#dedede', height:40, color:'black', fontFamily:'Poppins-Regular', fontSize:12, borderRadius:5, paddingRight:10, paddingLeft:10,}}
 placeholder='Masukan NIK' placeholderTextColor='gray' value={form.nik} onChangeText={value => handleInputChange(value, 'nik')} />
{/* END MASUKAN NIK */}

{/* MASUKAN NAMA SEKOLAH */}
<View style={{padding:10, marginTop:10}}>
  <Text style={{fontFamily:'Poppins-Regular'}}>Nama Sekolah:</Text>
</View>

<TextInput style={{backgroundColor:'#dedede', height:40, color:'black', fontFamily:'Poppins-Regular', fontSize:12, borderRadius:5, paddingRight:10, paddingLeft:10,}}
 placeholder='Masukan Nama Sekolah' placeholderTextColor='gray' value={form.nama_sekolah} onChangeText={value => setForm({...form,nama_sekolah: value})}/>
{/* END MASUKAN NAMA SEKOLAH */}

{/* MASUKAN NAMA DESA */}
<View style={{padding:10, marginTop:10}}>
  <Text style={{fontFamily:'Poppins-Regular'}}>Nama Desa:</Text>
</View>

<TextInput style={{backgroundColor:'#dedede', height:40, color:'black', fontFamily:'Poppins-Regular', fontSize:12, borderRadius:5, paddingRight:10, paddingLeft:10,}}
 placeholder='Masukan Nama Desa' placeholderTextColor='gray' value={form.nama_desa} onChangeText={value => setForm({...form,nama_desa: value})}/>
{/* END MASUKAN NAMA DESA */}


{/* KIRIM */}
<TouchableOpacity onPress={handleKonseling} style={{padding:10, backgroundColor:colors.success, marginTop:20, borderRadius:5}}>

 {buttonPressCount > 0 ? (
    <Text style={{ color: 'white', fontFamily: 'Poppins-Regular', textAlign: 'center' }}>Konseling Sekarang</Text>
  ) : (
    <Text style={{ color: 'white', fontFamily: 'Poppins-Regular', textAlign: 'center' }}>Konseling Sekarang</Text>
  )}

</TouchableOpacity>
{/* END KIRIM */}

</View>




</ScrollView>
    </View>
  )
}

export default Konseling

const styles = StyleSheet.create({})