import AsyncStorage from '@react-native-async-storage/async-storage';


export const storeData = async (key,value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // saving error
  }
}


export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key)
    if(value !== null) {
      return JSON.parse(value);
    }
  } catch(e) {
    // error reading value
  }
}

export const RegisterURL = 'https://besti.okeadmin.com/api/register';
export const LoginURL = 'https://besti.okeadmin.com/api/login';
export const KonselingRemajaURL = 'http://10.255.5.194/besti/api/konselingremaja';
export const KonselingRemajaURLLOGIN = 'https://besti.okeadmin.com/api/KonselingRemaja';
export const SliderURL = 'https://besti.okeadmin.com/api/slider';
export  const MYAPP = 'BESTI'; 