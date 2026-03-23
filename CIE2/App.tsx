/**
 * Travel Explorer App
 */

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
  Alert,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Type definitions
type RootStackParamList = {
  Home: undefined;
  Destination: { destination: string };
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
type DestinationScreenProps = NativeStackScreenProps<RootStackParamList, 'Destination'>;

const Stack = createNativeStackNavigator<RootStackParamList>();

function HomeScreen({ navigation }: HomeScreenProps) {
  const [destination, setDestination] = useState('');

  const handleExplore = () => {
    if (destination.trim() === '') {
      Alert.alert('Error', 'Please enter a destination name');
      return;
    }
    navigation.navigate('Destination', { destination });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel Explorer</Text>
      <Text style={styles.heading}>Explore your Destination</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Destination Name"
        value={destination}
        onChangeText={setDestination}
        placeholderTextColor="#999"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleExplore}
      >
        <Text style={styles.buttonText}>Explore</Text>
      </TouchableOpacity>
    </View>
  );
}

function DestinationScreen({ route, navigation }: DestinationScreenProps) {
  const { destination } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Travel Destination</Text>
      <Text style={styles.destinationText}>{destination}</Text>
      <Image
        source={{ uri: 'https://via.placeholder.com/300x200?text=Destination+Image' }}
        style={styles.image}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Destination" component={DestinationScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: '600',
    color: '#555',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#fff',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  destinationText: {
    fontSize: 20,
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 30,
    borderRadius: 10,
  },
});

export default App;