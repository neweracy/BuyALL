// App.js

import React,{useState, useEffect} from 'react';
import AppNavigator from './src/Navigation/AppNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Preloader from  './src/Screens/Preloader'
import { View } from 'react-native';
import Parse from 'parse/react-native'
// import parseConfig from './src/config/Parse'; // Import Parse configuration

// Parse.initialize(parseConfig.applicationId, parseConfig.javascriptKey);
// Parse.serverURL = parseConfig.serverURL;

const App = () => {
  

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 3280);
  }, []);

  return (
    <SafeAreaProvider>

     {isLoading ?  <AppNavigator /> : <Preloader />}
    </SafeAreaProvider>
  );
};

export default App;
