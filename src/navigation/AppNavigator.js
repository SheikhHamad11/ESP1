import 'react-native-gesture-handler';
import {
  NavigationContainer,
  useNavigation,
  DrawerActions,
} from '@react-navigation/native';
import HomeScreen from '../screens/frontend/Home';
import AboutScreen from '../screens/frontend/About';
import ContactScreen from '../screens/frontend/Contact';
import ProfileScreen from '../auth/ProfileScreen';
import UserScreen from '../auth/UserScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from '../DrawerContent';
import SplashScreen from 'react-native-splash-screen';
import {useEffect, useState} from 'react';
import LoginPage from '../auth/Login';
import RegisterPage from '../auth/Register';
import ForgotPage from '../auth/ForgotPassword';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AdminScreen from '../screens/frontend/AdminScreen';
import UpdateProfile from '../screens/UpdateProfile/UpdateProfile';

const StackNav = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        statusBarColor: '#0163d2',
        headerShown: false,
        headerStyle: {
          backgroundColor: '#0163d2',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
      <Stack.Screen name="AdminScreen" component={AdminScreen} />
      <Stack.Screen name="About" component={AboutScreen} options={{}} />
      <Stack.Screen name="Contact" component={ContactScreen} options={{}} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="LoginNav" component={LoginNav} />
      <Stack.Screen
        name="User"
        component={UserScreen}
        options={{
          headerShown: true,
        }}
      />
      {/* <Stack.Screen name="LoginUser" component={LoginNav} /> */}
    </Stack.Navigator>
  );
};

const DrawerNav = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="RootHome" component={StackNav} />
    </Drawer.Navigator>
  );
};

const AdminStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          statusBarColor: '#0163d2',
          headerShown: true,
          headerBackVisible: false,
          headerStyle: {
            backgroundColor: '#0163d2',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
        }}
        name="Admin"
        component={AdminScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="LoginNav"
        component={LoginNav}
      />
    </Stack.Navigator>
  );
};

const LoginNav = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="Register" component={RegisterPage} />
      <Stack.Screen name="Forgot" component={ForgotPage} />
      <Stack.Screen name="Home" component={DrawerNav} />
      <Stack.Screen name="AdminStack" component={AdminStack} />
    </Stack.Navigator>
  );
};
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setuserType] = useState(false);
  async function getData() {
    const data = await AsyncStorage.getItem('isLoggedIn');
    const userType1 = await AsyncStorage.getItem('userType');
    // console.log(data, 'at app.jsx');
    setIsLoggedIn(data);
    setuserType(userType1);
  }
  console.log(isLoggedIn);
  useEffect(() => {
    getData();
    setTimeout(() => {
      SplashScreen.hide();
    }, 10);
  }, [isLoggedIn]);

  return (
    <NavigationContainer>
      {isLoggedIn && userType == 'Admin' ? (
        <AdminStack />
      ) : isLoggedIn ? (
        <>
          {console.log(isLoggedIn)}
          <DrawerNav />
        </>
      ) : (
        <>
          {console.log(isLoggedIn)}
          <LoginNav />
        </>
      )}
    </NavigationContainer>
  );
}
export default App;
