import { Container, LoadingIcon } from './styles';

import AsyncStorage from '@react-native-async-storage/async-storage'

import BarberLogo from '../assets/barber.svg';
import { useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';

export function Preload() {
  const navigation = useNavigation();

  const checkToken = async () => {
    const token = await AsyncStorage.getItem('token');

    if(token) {
      // return validar o token
    } else {
      navigation.navigate('SignIn');
    }
  }

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <Container>
      <BarberLogo width="100%" height="160"/>
      <LoadingIcon size="large" color="white"/>
    </Container>
  )
} 