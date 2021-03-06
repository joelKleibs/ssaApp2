import * as React from 'react';
import { View, Text, Button, TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Header } from 'react-native-elements';


function LandingScreen({ navigation }) {
  return (

    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Header
          leftComponent={{ image: require('./utilities/images/Tekengebied 2ssa.png') }}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
      </View>
      <View>
        <Text>Landing Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('PastEventsScreen')}
        />
      </View>
    </View>
  );
}

function PastEventsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Past Events Screen</Text>
      <Button
        title="New event"
        onPress={() => navigation.navigate('ScannerScreen')}
      />

      <View>
        <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate('ProofScreen')}>
          <View>
            <View>
              <Text>27 Aug. 2021</Text>
              <Text>Medical conference</Text>
              <Text>London</Text>
              <Text>Conference</Text>
            </View>
          </View>
          <View>
            <View>
              <Text>12 June. 2021</Text>
              <Text>Clinical workshop</Text>
              <Text>London</Text>
              <Text>Workshop</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function ScannerScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Scan QR Code</Text>
      <Button
        title="Back to events"
        onPress={() => navigation.navigate('PastEventsScreen')}
      />
      <Button
        title="Scan!"
        onPress={() => navigation.navigate('ProofScreen')}
      />
    </View>
  );
}

function ProofScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hash Of Proof</Text>
      <Button
        title="Back to events"
        onPress={() => navigation.navigate('PastEventsScreen')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();



function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LandingScreen"
          component={LandingScreen}
          // options={{
          //   title: 'My home',
          //   headerStyle: {
          //     backgroundColor: '#f4511e',
          //   },
          //   headerTintColor: '#fff',
          //   headerTitleStyle: {
          //     fontWeight: 'bold',
          //   },
          // }}
        />
        <Stack.Screen name="PastEventsScreen" component={PastEventsScreen} />
        <Stack.Screen name="ScannerScreen" component={ScannerScreen} />
        <Stack.Screen name="ProofScreen" component={ProofScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
