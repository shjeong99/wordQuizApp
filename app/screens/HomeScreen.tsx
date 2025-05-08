import { View, Text } from 'react-native';
import { Button } from '@ui-kitten/components';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '../navigation/MainNavigator'
import React from 'react';
import { BottomNavigation, BottomNavigationTab, Icon, IconElement } from '@ui-kitten/components';

const PersonIcon = (props): IconElement => (
  <Icon
    {...props}
    name='person-outline'
  />
);

const BellIcon = (props): IconElement => (
  <Icon
    {...props}
    name='bell-outline'
  />
);

const EmailIcon = (props): IconElement => (
  <Icon
    {...props}
    name='email-outline'
  />
);

// navigation의 타입
type HomeScreenNavigationProp = StackNavigationProp<MainStackParamList, 'Home'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <View>
      <Text>홈 화면</Text>

      <Button onPress={() => navigation.navigate('Details')}>세부 화면으로</Button>

<div>
      <BottomNavigation
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}
    >
      <BottomNavigationTab
        icon={PersonIcon}
        title='USERS'
      />
      <BottomNavigationTab
        icon={BellIcon}
        title='ORDERS'
      />
      <BottomNavigationTab
        icon={EmailIcon}
        title='TRANSACTIONS'
      />
    </BottomNavigation>
    </div>
    </View>
  );
};

export default HomeScreen;