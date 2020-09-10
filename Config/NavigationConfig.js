import React from 'react';
import { Platform, StyleSheet, View, Image, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import {
  Ionicons,
  MaterialIcons,
  FontAwesome,
  AntDesign,
} from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Explore from '../Screens/Explore';
import Home from '../Screens/Home';
import Subscription from '../Screens/Subscription';
import Notification from '../Screens/Notification';
import Library from '../Screens/Library';
import ActionBarImage from '../Utils/ActionBarImage';
const { width: WIDTH } = Dimensions.get('window');
const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: WIDTH - 250,
    marginTop: 20,
  },
});

// Drawer Navigator Start
// const DrawerNavigator = createDrawerNavigator({
//   Home: Home,
//   Explore: Explore,
//   Subscriptions: Subscription,
//   Notifications: Notification,
//   Library: Library,
// });

const StackNavigator = {
  defaultNavigationOptions: ({ navigation }) => {
    const size = 24;
    const color = 'black';
    return {
      title: 'Youtube',
      headerLeft: () => (
        <AntDesign
          name="youtube"
          style={{ marginLeft: 20, marginRight: -20 }}
          size={size}
          color="red"
        />
      ),
      headerRight: () => (
        <View style={styles.iconContainer}>
          <FontAwesome name="video-camera" size={size} color={color} />
          <Ionicons
            size={size}
            color={color}
            name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'}
          />
          {/* <ActionBarImage /> */}
        </View>
      ),
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
  },
};

const HomeStack = createStackNavigator(
  {
    Home: Home,
  },
  StackNavigator
);
const ExploreStack = createStackNavigator(
  {
    Explore: Explore,
  },
  StackNavigator
);

const SubscriptionsStack = createStackNavigator(
  {
    Subscriptions: Subscription,
  },
  StackNavigator
);

const NotifiStack = createStackNavigator(
  {
    Notifications: Notification,
  },
  StackNavigator
);

const LibraryStack = createStackNavigator(
  {
    Library: Library,
  },
  StackNavigator
);

const MyTabs = createBottomTabNavigator(
  {
    Home: HomeStack,
    Explore: ExploreStack,
    Subscriptions: SubscriptionsStack,
    Notifications: NotifiStack,
    Library: LibraryStack,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        tabBarIcon: ({ tintColor }) => {
          const { routeName } = navigation.state;
          const size = 24;
          if (routeName === 'Home') {
            return (
              <Ionicons
                name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
                size={size}
                color={tintColor}
              />
            );
          } else if (routeName === 'Explore') {
            return (
              <MaterialIcons name="explore" size={size} color={tintColor} />
            );
          } else if (routeName === 'Subscriptions') {
            return (
              <MaterialIcons
                name="subscriptions"
                size={size}
                color={tintColor}
              />
            );
          } else if (routeName === 'Notifications') {
            return (
              <Ionicons
                name={
                  Platform.OS === 'ios'
                    ? 'ios-notifications'
                    : 'md-notifications'
                }
                size={size}
                color={tintColor}
              />
            );
          } else if (routeName === 'Library') {
            return (
              <MaterialIcons
                name="video-library"
                size={size}
                color={tintColor}
              />
            );
          }
        },
      };
    },
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'black',
    },
  }
);

const AppContainer = createAppContainer(MyTabs);

export default AppContainer;

// const Tab = createBottomTabNavigator();

// export default function NavigationConfig() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             if (route.name === 'Home') {
//               return (
//                 <Ionicons
//                   name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
//                   size={size}
//                   color={color}
//                 />
//               );
//             } else if (route.name === 'Explore') {
//               return <MaterialIcons name="explore" size={size} color={color} />;
//             } else if (route.name === 'Subscriptions') {
//               return (
//                 <MaterialIcons name="subscriptions" size={size} color={color} />
//               );
//             } else if (route.name === 'Notification') {
//               return (
//                 <Ionicons
//                   name={
//                     Platform.OS === 'ios'
//                       ? 'ios-notifications'
//                       : 'md-notifications'
//                   }
//                   size={size}
//                   color={color}
//                 />
//               );
//             } else if (route.name === 'Library') {
//               return (
//                 <MaterialIcons name="video-library" size={size} color={color} />
//               );
//             }
//           },
//         })}
//         tabBarOptions={{
//           activeTintColor: 'red',
//           inactiveTintColor: 'black',
//         }}
//       >
//         <Tab.Screen name="Home" component={Home} />
//         <Tab.Screen name="Explore" component={Explore} />
//         <Tab.Screen
//           name="Subscriptions"
//           component={Subscription}
//           options={{ tabBarBadge: '' }}
//         />
//         <Tab.Screen
//           name="Notification"
//           component={Notification}
//           options={{ tabBarBadge: 3 }}
//         />
//         <Tab.Screen name="Library" component={Library} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
