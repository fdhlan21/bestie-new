import axios from 'axios';
import React, { useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { showMessage } from 'react-native-flash-message';
import Modal from "react-native-modal";
import { ApoteKIcon, Kalendar } from '../../assets';
import Loading from '../../config/loading';
import colors from '../../utils/colors';
import { LoginURL, MYAPP, storeData } from '../../utils/storedata';
const LoginScreen = ({navigation}) => {
    const[form, setForm] = useState({
        nama:'',
        tempat:'',
        tanggallahir: null
    })

const [loading, setLoading] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const handleDateChange = date => {
    setForm({ ...form, tanggallahir: date });
  };

 const PickerDate = () => {
    return (
        <TouchableOpacity onPress={toggleDatePicker}>
        <Image style={{ height: 30, width: 30, tintColor:colors.success, bottom:5 }} source={Kalendar} />
        <Modal visible={showDatePicker} animationType="">
          <View style={styles.datePickerContainer}>
            <Text style={{ fontFamily: 'Poppins-Regular', marginTop: 10 }}>Pilih Tanggal Lahir Anda</Text>
            <DatePicker
              style={{ right: 10 }}
              date={form.tanggallahir || new Date()}
              mode="date"
              textColor='black'
              onDateChange={handleDateChange}
            />
            <TouchableOpacity onPress={toggleDatePicker} style={styles.button}>
              <Text style={styles.buttonText}>Simpan</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </TouchableOpacity>
    );
  };

const handleLogin = () => {
    if ((form.nama.length == 0) || (form.tempat.length == 0)) {
        showMessage({
          type:'default',
          color:'white',
          message:'Anda Belum Mengisi Nama & TTL!',
          backgroundColor:colors.errormessage,
        });
    } else if (form.nama.length == 0){
         showMessage({
          type:'default',
          color:'white',
          message:'Anda Belum Mengisi Nama!',
          backgroundColor:colors.errormessage,
        });
    }else if (form.tanggallahir == null) {
        showMessage({
          type:'default',
          color:'white',
          message:'Anda Belum Mengisi Tanggal Lahir!',
          backgroundColor:colors.errormessage,
        });
    }else if (form.tempat.length == 0) {
  showMessage({
          type:'default',
          color:'white',
          message:'Anda Belum Mengisi Tempat Tinggal!',
          backgroundColor:colors.errormessage,
        });
    } else {
   console.log(form);
   setLoading(true);
    const dateWithoutTime = form.tanggallahir.toISOString().split('T')[0];
    const newData = { ...form, tanggallahir: dateWithoutTime };
   axios
   .post(LoginURL, newData)
   .then(response => {
    console.log(response.data);
    setLoading(false);
    if (response.data==212) {
      alert('Sepertinya Akun Belum Terdaftar!');
    } else {
      storeData('user', response.data);
      console.log(response.data)
   navigation.replace('HalamanHome');
        Alert.alert(MYAPP,'Yey!, Login Berhasil');
    }
   })
   .catch(error => {
    console.error(error);
    setLoading(false);
   })
    }
}

  return (
<>

    <View style={{flex:1, backgroundColor:colors.primary}}>
    <ScrollView>
    {/* ICON LOGIN SCREEN */}
    <View style={{padding:10, flexDirection:'row', justifyContent:'center'}}>
  <Image style={{height:250, width:250}} source={ApoteKIcon}/>
    </View>

    {/* LOGIN INPUT */}
    <View style={{padding:10}}> 
     <View><Text style={{textAlign:'center', fontSize:20, fontFamily:'Poppins-SemiBold'}}>- Login</Text></View>
     <View style={{padding:10, marginTop:20}}><Text style={{fontFamily:'Poppins-Regular'}}>- Nama</Text></View>
     <TextInput value={form.nama} style={styles.nameholder} 
      onChangeText={value => setForm({...form,nama: value})} placeholder='Masukan Nama Anda' placeholderTextColor='gray'/>
     
      <View style={{padding:10, marginTop:0}}><Text style={{fontFamily:'Poppins-Regular'}}>- Tempat:</Text></View>
     <TextInput value={form.tempat} style={styles.placehorder} 
      onChangeText={value => setForm({...form,tempat: value})} placeholder='Masukan Tempat Lahir Anda' placeholderTextColor='gray'/>
     
     <View style={{marginTop:10, padding:10}}><Text style={{fontFamily:'Poppins-Regular'}}>- Tanggal Lahir:</Text></View>
     <View style={{padding:10, backgroundColor:'#dedede', borderRadius:10,  marginTop:0, height:40}}>
     <PickerDate/>
        {form.tanggallahir && (
    
          <Text style={styles.selectedDate}>
            {form.tanggallahir.getDate()} - {form.tanggallahir.getMonth() + 1} - {form.tanggallahir.getFullYear()}
          </Text>
     
        )}
        
     </View>


     

    </View>
    {/* BUTTON LOGIN AND REGISTER */}
    <View style={{padding:10}}>
    {/* LOGIN BUTTON */}
    <View>
        <TouchableOpacity onPress={handleLogin} style={{padding:10, backgroundColor:colors.success, borderRadius:10}}>
            <Text style={{textAlign:'center', color:'white', }}>Login</Text>
        </TouchableOpacity>
    
    </View>
    {/* END LOGIN BUTTON */}

    {/* REGISTER BUTTON */}
        <View style={{marginTop:10}}>
        <TouchableOpacity onPress={()=> navigation.navigate('HalamanRegister')} style={{padding:10, backgroundColor:colors.warning, borderRadius:10}}>
            <Text style={{textAlign:'center', color:'white', }}>Register</Text>
        </TouchableOpacity>
    </View>
    {/* END REGISTER BUTTON */}
    </View>
    </ScrollView>
    </View>
    {loading && <Loading/>}
    </>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    placehorder:{
      height:40,
        backgroundColor:'#dedede',
        borderRadius:10, 
        color:'black', 
        paddingRight:10, 
        paddingLeft:10, 
        fontFamily:'Poppins-Regular',
        fontSize:12,
    },
    nameholder: {
       height:40,
        backgroundColor:'#dedede',
        borderRadius:10, 
        color:'black', 
        paddingRight:10, 
        paddingLeft:10, 
        fontFamily:'Poppins-Regular',
        fontSize:12,
},

datePickerContainer: {
    height:280,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius:10,
   
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: colors.success,
    borderRadius: 10,
    borderWidth:1,
    borderColor:'white',
    height:40,
    width:100,


  },
  buttonText: {
    color: 'white',
    fontFamily:'Poppins-SemiBold',
    textAlign:'center',
    fontSize:12

  },
  selectedDate: {
    textAlign: 'left',
    fontFamily: 'Poppins-Regular',
    fontSize:15,
    bottom:0,
    top:0,
    left:40,
    marginTop:-29,
  },
})