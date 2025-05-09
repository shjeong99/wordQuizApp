import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import MyWordsScreen from '../screens/MyWordsScreen';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { useEffect, useState } from 'react';

//하단 탭
import { NativeBaseProvider, IconButton, Box, Text, Heading, VStack, FormControl, Input, Link, Button, Icon, HStack, Center, Pressable } from 'native-base';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';


export type MainStackParamList = {
  Home: undefined;
  MyWordsScreen: { itemId: number };  // 예시로, Details 화면에 itemId라는 파라미터를 전달한다고 가정
};

const Stack = createStackNavigator<MainStackParamList>();

function CustomHeader({ title }: { title: string }) {
  return (
    <HStack px="4" py="3" justifyContent="space-between" alignItems="center" bg="info.600">
        <IconButton
          icon={<Icon as={MaterialIcons} name="menu" size="sm" color="white" />}
          borderRadius="full"
        />
        <Text color="white" fontSize="20" fontWeight="bold">
          {title}
        </Text>
        <IconButton
          icon={<Icon as={MaterialIcons} name="search" size="sm" color="white" />}
          borderRadius="full"
        />
      </HStack>
  );
}

const FooterTab = () => {
  const [selected, setSelected] = useState(1); //탭 선택 여부

  return(
<HStack bg="info.600" alignItems="center" safeAreaBottom shadow={6}>
          <Pressable opacity={selected === 0 ? 1 : 0.5} py="3" flex={1} onPress={() => setSelected(0)}>
            <Center>
              <Icon mb="1" as={<MaterialCommunityIcons name={selected === 0 ? 'home' : 'home-outline'} />} color="white" size="sm" />
              <Text color="white" fontSize="12">
                홈
              </Text>
            </Center>
          </Pressable>
          {/* <Pressable opacity={selected === 1 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(1)}>
            <Center>
              <Icon mb="1" as={<MaterialIcons name="search" />} color="white" size="sm" />
              <Text color="white" fontSize="12">
                검색
              </Text>
            </Center>
          </Pressable> */}
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
          {/* <Pressable opacity={selected === 4 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(4)}>
            <Center>
              <Icon mb="1" as={<MaterialIcons name="image" />} color="white" size="sm" />
              <Text color="white" fontSize="12">
                불러오기
              </Text>
            </Center>
          </Pressable> */}
        </HStack>
  );
}

export default function MainNavigator() {
  const navigationRef = useNavigationContainerRef();
  const [headerTitle, setHeaderTitle] = useState('홈');

  const routeNameMap: Record<string, string> = {
    Home: '홈',
    MyWordsScreen: '내 단어',
  };

  useEffect(() => {
    const unsubscribe = navigationRef.addListener('state', () => {
      const currentRoute = navigationRef.getCurrentRoute();
      if (currentRoute?.name) {
        setHeaderTitle(routeNameMap[currentRoute.name] || '앱');
      }
    });

    return unsubscribe;
  }, [navigationRef]);
  
  return (
    <NavigationContainer ref={navigationRef}>
    <Box flex={1}>
      <CustomHeader title={headerTitle}/>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}} id={undefined}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MyWordsScreen" component={MyWordsScreen} />
      </Stack.Navigator>

      <Box position="absolute" bottom={0} left={0} right={0}>
        <FooterTab />
      </Box>
    </Box>
    </NavigationContainer>
  );
}