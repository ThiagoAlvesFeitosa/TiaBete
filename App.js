// In App.js in a new project

import * as React from 'react'
import {
  View,
  Text,
  Button,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import { NavigationContainer, TabActions } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import 'react-native-gesture-handler'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator()
const StackHome = createNativeStackNavigator()
const StackSetting = createNativeStackNavigator()
const StackComer = createNativeStackNavigator()
const StackRegistrarGlicemia = createNativeStackNavigator()

const navOptionHandler = () => ({
  headerShown: false
})

function CustomDrawerContent(props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{ height: 200, alignItems: 'center', justifyContent: 'center' }}
      >
        <Image
          source={require('./assets/user.png')}
          style={{ height: 120, width: 120, borderRadius: 60 }}
        />
      </View>
      <ScrollView style={{ marginLeft: 5 }}>
        <TouchableOpacity
          style={{ marginTop: 20, marginLeft: 5 }}
          onPress={() => props.navigation.navigate('HomeTab')}
        >
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginTop: 20, marginLeft: 5 }}
          onPress={() => props.navigation.navigate('LoginScreenStack')}
        >
          <Text>Perfil</Text>
        </TouchableOpacity>
      </ScrollView>
      <TouchableOpacity
        style={{ marginBottom: 10, marginLeft: 5 }}
        onPress={() => props.navigation.navigate('LoginScreen')}
      >
        <Text>Sair</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

function CustomHeader({ navigation }) {
  return (
    <View style={{ flexDirection: 'row', height: 50, marginTop: 25 }}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <TouchableOpacity
          title="OpenDrawer"
          onPress={() => navigation.openDrawer()}
        >
          <Image
            style={{ width: 30, height: 30, marginLeft: 5 }}
            source={require('./assets/menu-aberto.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Home" isHome={true} navigation={navigation} />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => navigation.navigate('HomeDetail')}
        >
          <Text>Go home Detail</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => navigation.navigate('Comer')}
        >
          <Text>Comer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => navigation.navigate('RegistrarGlicemia')}
        >
          <Text>RegistrarGlicemia</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

function GraficoScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="GraficoScreen" isHome={false} />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Tela do grafico</Text>
        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={{ width: 20, height: 20, marginLeft: 5 }}
            source={require('./assets/left-arrow.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

function SettingsScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Settings" isHome={true} navigation={navigation} />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings!</Text>
        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => navigation.navigate('SettingDetail')}
        >
          <Text>Go Settings Detail</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

function SettingsScreenDetail({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader
        title="SettingsDetail"
        isHome={false}
        navigation={navigation}
      />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Setting Detail!</Text>
        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={{ width: 20, height: 20, marginLeft: 5 }}
            source={require('./assets/left-arrow.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

function Comer({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Comer" isHome={true} navigation={navigation} />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Comer</Text>
        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={{ width: 20, height: 20, marginLeft: 5 }}
            source={require('./assets/left-arrow.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

function RegistrarGlicemia({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader
        title="RegistrarGlicemia"
        isHome={true}
        navigation={navigation}
      />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>RegistrarGlicemia</Text>
        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={{ width: 20, height: 20, marginLeft: 5 }}
            source={require('./assets/left-arrow.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader
        title="LoginScreen"
        isHome={false}
        navigation={navigation}
      />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Tela de Login!</Text>
        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => navigation.navigate('HomeApp')}
        >
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => navigation.navigate('Register')}
        >
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

function RegisterScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Comer" isHome={true} navigation={navigation} />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Tela de cadastro!</Text>
        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={{ width: 20, height: 20, marginLeft: 5 }}
            source={require('./assets/left-arrow.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

function HomeStack() {
  return (
    <StackHome.Navigator initialRouteName="HomeStack">
      <StackHome.Screen
        name="HomeStack"
        component={HomeScreen}
        options={navOptionHandler}
      />
      <StackHome.Screen
        name="GraficoScreen"
        component={GraficoScreen}
        options={navOptionHandler}
      />
    </StackHome.Navigator>
  )
}

function SettingStack() {
  return (
    <StackSetting.Navigator initialRouteName="Setting">
      <StackSetting.Screen
        name="SettingStack"
        component={SettingsScreen}
        options={navOptionHandler}
      />
      <StackSetting.Screen
        name="SettingDetail"
        component={SettingsScreenDetail}
        options={navOptionHandler}
      />
    </StackSetting.Navigator>
  )
}

function ComerStack() {
  return (
    <StackComer.Navigator initialRouteName="Comer">
      <StackComer.Screen
        name="ComerStack"
        component={Comer}
        options={navOptionHandler}
      />
    </StackComer.Navigator>
  )
}

function RegistrarGlicemiaStack() {
  return (
    <StackRegistrarGlicemia.Navigator initialRouteName="RegistrarGlicemia">
      <StackRegistrarGlicemia.Screen
        name="RegistrarGlicemiaStack"
        component={RegistrarGlicemia}
        options={navOptionHandler}
      />
    </StackRegistrarGlicemia.Navigator>
  )
}

function LoginScreenStack() {
  return (
    <StackRegistrarGlicemia.Navigator initialRouteName="RegistrarGlicemia">
      <StackRegistrarGlicemia.Screen
        name="LoginStack"
        component={Login}
        options={navOptionHandler}
      />
    </StackRegistrarGlicemia.Navigator>
  )
}

function HomeTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={navOptionHandler}
      />
      <Tab.Screen
        name="Settings"
        component={SettingStack}
        options={navOptionHandler}
      />
    </Tab.Navigator>
  )
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeTab"
      drawerContent={props => CustomDrawerContent(props)}
    >
      <Drawer.Screen
        name="HomeTab"
        component={HomeTab}
        options={navOptionHandler}
      />
      <Drawer.Screen
        name="Login"
        component={LoginScreen}
        options={navOptionHandler}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingStack}
        options={navOptionHandler}
      />
      <Drawer.Screen
        name="Comer"
        component={ComerStack}
        options={navOptionHandler}
      />
      <Drawer.Screen
        name="RegistrarGlicemia"
        component={RegistrarGlicemiaStack}
        options={navOptionHandler}
      />
    </Drawer.Navigator>
  )
}
const StackApp = createNativeStackNavigator()
function App() {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName="Login">
        <StackApp.Screen
          name="HomeApp"
          component={DrawerNavigator}
          options={navOptionHandler}
        />
        <StackApp.Screen
          name="Login"
          component={LoginScreen}
          options={navOptionHandler}
        />
        <StackApp.Screen
          name="Register"
          component={RegisterScreen}
          options={navOptionHandler}
        />
      </StackApp.Navigator>
    </NavigationContainer>
  )
}

export default App
