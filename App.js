import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from 'react-native';

import {client} from './src/graphql/Client';
import {Jobs} from './src/graphql/Quries';
import JobCard from './src/components/job-card';
import Home from './src/screens/home';

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;
