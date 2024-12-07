/**
 * @format
 */
import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import {ProviderToolkit} from './src/shared/redux/ProviderToolkit';

const RNApp = () => (
  <ProviderToolkit>
    <App />
  </ProviderToolkit>
);

AppRegistry.registerComponent(appName, () => RNApp);
