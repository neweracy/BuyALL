import Parse from 'parse/react-native';
import AsyncStorage from '@react-native-community/async-storage';
import 'dotenv/config';

Parse.setAsyncStorage(AsyncStorage);

const appId = process.env.APP_ID;
const jsId = process.env.JAVASCRIPT_KEY;

Parse.initialize(appId, jsId);
Parse.serverURL = 'http://127.0.0.1:1337/1';

console.log(appId);

