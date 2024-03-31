// App.js

import React from 'react';
import AppNavigator from './src/Navigation/AppNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import Parse from 'parse/react-native';
// import parseConfig from './src/config/Parse'; // Import Parse configuration

// Parse.initialize(parseConfig.applicationId, parseConfig.javascriptKey);
// Parse.serverURL = parseConfig.serverURL;

const App = () => {
  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
};

export default App;
