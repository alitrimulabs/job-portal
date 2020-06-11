import React from 'react';
import {ApolloProvider} from '@apollo/react-hooks';

import {client} from './src/graphql/Client';
import AppNavigator from './src/navigation/AppNavigator';

function App() {
  return (
    <ApolloProvider client={client}>
      <>
        <AppNavigator />
      </>
    </ApolloProvider>
  );
}

export default App;
