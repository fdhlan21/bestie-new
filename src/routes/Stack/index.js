// In App.js in a new project

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { Home, Profile } from '../../assets';
import LoginScreen from '../../page/Login';
import RegisterScreen from '../../page/Register';
import SplashScreen from '../../page/Splash';
import EdukasiRemaja from '../../page/edukasiremaja';
import MateriDelapan from '../../page/edukasiremaja/materidelapan';
import MateriDua from '../../page/edukasiremaja/materidua';
import MateriEmpat from '../../page/edukasiremaja/materiempat';
import MateriEnam from '../../page/edukasiremaja/materienam';
import MateriLima from '../../page/edukasiremaja/materilima';
import MateriSatu from '../../page/edukasiremaja/materisatu';
import MateriSembilan from '../../page/edukasiremaja/materisembilan';
import MateriTiga from '../../page/edukasiremaja/materitiga';
import MateriTujuh from '../../page/edukasiremaja/materitujuh';
import HomeScreen from '../../page/home/indec';
import InovasiScreen from '../../page/inovasi';
import KonselingRemaja from '../../page/konselingremaja';
import Konseling from '../../page/konselingremaja/konseling';
import ProfileScreen from '../../page/profile';
import SkiningAnemia from '../../page/skininganemia';

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (

  <Tab.Navigator screenOptions={{
    tabBarShowLabel:false
  }}>
    <Tab.Screen name='Home' component={HomeScreen} options={{headerShown:false, tabBarIcon: ({focused}) => (
    <View style={{alignItems:'center'}}>
   <Image source={Home} style={{width:30, height:30, tintColor: focused ? '#009895' : 'gray',}} />
    <Text style={{fontFamily:'Poppins-Regular', fontSize:10, color: focused ? '#009895' : 'gray', textAlign:'center'}}>Beranda</Text>
    </View>

  )}}/>
       <Tab.Screen name='Profile' component={ProfileScreen} options={{headerShown:false,tabBarIcon: ({focused}) => (
    <View style={{alignItems:'center'}}>
   <Image source={Profile} style={{width:27, height:27, tintColor: focused ? '#009895' : 'gray',}} />
    <Text style={{fontFamily:'Poppins-Regular', fontSize:10, color: focused ? '#009895' : 'gray', textAlign:'center', top:2}}>Profile</Text>
    </View>

  )}}/>
  </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

function StackNav() {
  return (
 
      <Stack.Navigator initialRouteName='SkiningAnemia'>
        <Stack.Screen name="HalamanSplash" component={SplashScreen} options={{headerShown:false}}/>
         <Stack.Screen name="HalamanLogin" component={LoginScreen} options={{headerShown:false}}/>
          <Stack.Screen name="HalamanRegister" component={RegisterScreen} options={{headerShown:false}}/>
           <Stack.Screen name="HalamanHome" component={TabNav} options={{headerShown:false}}/>
           <Stack.Screen name="HalamanEdukasiRemaja" component={EdukasiRemaja} options={{headerShown:false}}/>
           <Stack.Screen name="HalamanMateriSatu" component={MateriSatu} options={{headerShown:false}}/>
           <Stack.Screen name="HalamanMateriDua" component={MateriDua} options={{headerShown:false}}/>
           <Stack.Screen name="HalamanMateriTiga" component={MateriTiga} options={{headerShown:false}}/>
           <Stack.Screen name="HalamanProfile" component={TabNav} options={{headerShown:false}}/>
           <Stack.Screen name="HalamanMateriEmpat" component={MateriEmpat} options={{headerShown:false}}/>
            <Stack.Screen name="HalamanMateriLima" component={MateriLima} options={{headerShown:false}}/>
             <Stack.Screen name="HalamanMateriEnam" component={MateriEnam} options={{headerShown:false}}/>
              <Stack.Screen name="HalamanMateriTujuh" component={MateriTujuh} options={{headerShown:false}}/>
               <Stack.Screen name="HalamanMateriDelapan" component={MateriDelapan} options={{headerShown:false}}/>
                <Stack.Screen name="HalamanMateriSembilan" component={MateriSembilan} options={{headerShown:false}}/>
           <Stack.Screen name="HalamanInovasi" component={InovasiScreen} options={{headerShown:false}}/>
            <Stack.Screen name="HalamanKonselingRemaja" component={KonselingRemaja} options={{headerShown:false}}/>
            <Stack.Screen name="HalamanKonseling" component={Konseling} options={{headerShown:false}}/>
            <Stack.Screen name="SkiningAnemia" component={SkiningAnemia} options={{headerShown:false}}/>
      </Stack.Navigator>
   
  );
}

export default StackNav;