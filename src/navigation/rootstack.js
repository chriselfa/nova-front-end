import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import AnalyticsScreen from '../screens/app/AnalyticsScreen';
import HistoryDetailsScreen from '../screens/HistoryDetailsScreen';
import ProfilScreen from '../screens/app/ProfilScreen';
import WelcomePage from '../screens/login/WelcomePage';
import SendScreen from '../screens/SendScreen';
import ChatScreen from '../screens/app/ChatScreen';
import GroupeScreen from '../screens/app/GroupeScreen';
import LoginScreen from '../screens/login/LoginScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CodeVerificationScreen from '../screens/login/CodeVerificationScreen';
import MenuScreen from '../screens/MenuScreen';
import SignUpScreen from '../screens/login/SignUpScreen';
import MoreDetailsScreen from '../screens/MoreDetailsScreen';
import VerificationScreen from '../screens/login/VerificationScreen';
import NotificationScreen from '../screens/NotificationScreen';
import HomeScreen from '../screens/app/HomeScreen';
import DepositScreen from '../screens/DepositScreen';
import OptionScreen from '../screens/OptionScreen';
import WithdrawScreen from '../screens/WithdrawScreen';
import HelpScreen from '../screens/HelpScreen';
import PasswordScreen from '../screens/login/PasswordScreen';
import ContactusSreen from '../screens/ContactusSreen';
import ContainerService from '../screens/appServices/ContainerService'
const Stack = createStackNavigator();


const RootStack = () => {
  return (
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Welcome' component={WelcomePage}/>
        <Stack.Screen name="Login" component={LoginScreen}  />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Verification" component={VerificationScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Apps" component={BottomTabNavigator} />
        <Stack.Screen name="Profil" component={ProfilScreen} />
        <Stack.Screen name="Analytics" component={AnalyticsScreen} />
        <Stack.Screen name="HistoryDetails" component={HistoryDetailsScreen} />
        {/* <Stack.Screen name='ContainerService' component={ContainerService}/> */}
        <Stack.Screen name="Send" component={SendScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Groupe" component={GroupeScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="CodeVerification" component={CodeVerificationScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="MoreDetails" component={MoreDetailsScreen} />
        <Stack.Screen name="ContactUs" component={ContactusSreen} />
        <Stack.Screen name="Notifications" component={NotificationScreen} />
        <Stack.Screen name="Deposit" component={DepositScreen} />
        <Stack.Screen name="Withdraw" component={WithdrawScreen} />
        <Stack.Screen name="Help" component={HelpScreen} />
        <Stack.Screen name="Options" component={OptionScreen} />
        <Stack.Screen name="Password" component={PasswordScreen} />
      </Stack.Navigator>
  );
};

export default RootStack;