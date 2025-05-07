import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

export type MainStackParamList = {
  Home: undefined;
  Details: { itemId: number };  // 예시로, Details 화면에 itemId라는 파라미터를 전달한다고 가정
};

const Stack = createStackNavigator<MainStackParamList>();
const Tab = createBottomTabNavigator();

//스택 네비게이터
function HomeStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home" id={undefined}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default function MainNavigator() {
  //탭 네비게이터 추가
  return (
    <>
    <Tab.Navigator screenOptions={{headerShown:false}} id={undefined}>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      {/* <Tab.Screen name="Settings" component={SettingsStackNavigator} /> */}
    </Tab.Navigator>
    </>

    //탭 없을때
    // <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}} id={undefined}>
    //   <Stack.Screen name="Home" component={HomeScreen} />
    //   <Stack.Screen name="Details" component={DetailsScreen} />
    // </Stack.Navigator>
  );
}