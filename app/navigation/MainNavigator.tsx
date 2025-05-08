import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

//하단 탭
import { NativeBaseProvider, Box, Text, Heading, VStack, FormControl, Input, Link, Button, Icon, HStack, Center, Pressable } from 'native-base';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

export type MainStackParamList = {
  Home: undefined;
  Details: { itemId: number };  // 예시로, Details 화면에 itemId라는 파라미터를 전달한다고 가정
};

const Stack = createStackNavigator<MainStackParamList>();
// const Tab = createBottomTabNavigator();

//스택 네비게이터
// function HomeStackNavigator() {
//   return (
//     <Stack.Navigator initialRouteName="Home" id={undefined}>
//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="Details" component={DetailsScreen} />
//     </Stack.Navigator>
//   );
// }

export default function MainNavigator() {
  const [selected, setSelected] = useState(1); //탭 선택 여부

  return (
    //탭 네비게이터 추가
    // <>
    // <Tab.Navigator screenOptions={{headerShown:false}} id={undefined}>
    //   <Tab.Screen name="Home" component={HomeStackNavigator} />
    //   {/* <Tab.Screen name="Settings" component={SettingsStackNavigator} /> */}
    // </Tab.Navigator>
    // </>

    <Box flex={1}>
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:true}} id={undefined}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>

    <Box position="absolute" bottom={0} left={0} right={0} bg="indigo.600" shadow={6}>
        <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
          <Pressable opacity={selected === 0 ? 1 : 0.5} py="3" flex={1} onPress={() => setSelected(0)}>
            <Center>
              <Icon mb="1" as={<MaterialCommunityIcons name={selected === 0 ? 'home' : 'home-outline'} />} color="white" size="sm" />
              <Text color="white" fontSize="12">
                홈
              </Text>
            </Center>
          </Pressable>
          <Pressable opacity={selected === 1 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(1)}>
            <Center>
              <Icon mb="1" as={<MaterialIcons name="search" />} color="white" size="sm" />
              <Text color="white" fontSize="12">
                검색
              </Text>
            </Center>
          </Pressable>
          <Pressable opacity={selected === 2 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(2)}>
            <Center>
              <Icon mb="1" as={<MaterialIcons name="view-list" />} color="white" size="sm" />
              <Text color="white" fontSize="12">
                내 단어  
              </Text>
            </Center>
          </Pressable>
          <Pressable opacity={selected === 3 ? 1 : 0.6} py="2" flex={1} onPress={() => setSelected(3)}>
            <Center>
              <Icon mb="1" as={<MaterialIcons name="help" />} color="white" size="sm" />
              <Text color="white" fontSize="12">
                퀴즈
              </Text>
            </Center>
          </Pressable>
          <Pressable opacity={selected === 4 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(4)}>
            <Center>
              <Icon mb="1" as={<MaterialIcons name="image" />} color="white" size="sm" />
              <Text color="white" fontSize="12">
                불러오기
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>
    </Box>
  );
}