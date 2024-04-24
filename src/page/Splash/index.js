import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { IconAPK, Puskesmas } from '../../assets';
import { getData } from '../../utils/storedata';

const SplashScreen = ({navigation}) => {
useEffect(()=>{
 setTimeout(()=> {

  getData('user').then(res=>{
    if(!res){
 navigation.replace('HalamanLogin');
    }else{
 navigation.replace('HalamanHome');
    }
  })
 
 }, 2000)
}, []);
  return (
    <View style={{flex:1, backgroundColor:'white'}}>
     <View style={{alignItems:'center', marginTop:'50%', flexDirection:'row'}}>
         <Image source={IconAPK} style={styles.imagesplash} />
          <Image source={Puskesmas} style={styles.puskesmas} />
     </View>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    imagesplash: {
        width:144,
        height:144,
        left:30
    },
    puskesmas: {
        width:190,
        height:190,
        left:20
    }
})