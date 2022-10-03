import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, View } from 'react-native';
import firebase from './src/services/firebaseConnection';

import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer >
      <StatusBar backgroundColor="#131313" barStyle="light-content" />
      <Routes />
    </NavigationContainer>
  );
}

