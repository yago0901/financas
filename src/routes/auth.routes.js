import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './../pages/SingIn';

const AuthStack = createNativeStackNavigator();

function AuthRoutes(){
  return(
    <AuthStack.Navigator>
      <AuthStack.Screen name="SignIn" component={SignIn}/>
    </AuthStack.Navigator>
  );
}

export default AuthRoutes;