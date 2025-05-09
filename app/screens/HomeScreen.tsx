import { View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '../navigation/MainNavigator'
import React from 'react';

//native-base
import { Button } from 'native-base';
import { Container, Text, Heading, Center, useColorMode } from "native-base";


// navigation의 타입
type HomeScreenNavigationProp = StackNavigationProp<MainStackParamList, 'Home'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Center flex={1} px="3" bg={colorMode === 'dark' ? 'coolGray.900' : 'warmGray.50'}>
      <Container>
      <Text fontSize="lg" color={colorMode === 'dark' ? 'white' : 'black'} mb="4">
        홈 화면 - 현재 모드: {colorMode}
      </Text>
        <Text mt="3" fontWeight="medium">
          NativeBase is a simple, modular and accessible component library that
          gives you building blocks to build you React applications.
        </Text>
        <Button onPress={toggleColorMode} bg="info.600">다크모드 전환</Button>
        <Button onPress={() => navigation.navigate('MyWordsScreen')} bg="info.600">세부 화면으로</Button>

      </Container>
    </Center>
  );
};


export default HomeScreen;