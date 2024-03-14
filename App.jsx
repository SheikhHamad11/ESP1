import React from 'react';
// import AppNavigator from './src/navigation/AppNavigator';
// import Home from './src/screens/frontend/Home';
import AppNavigator from './src/navigation/AppNavigator';
import AuthContextProvider from './src/context/AuthContext';

export default function App() {
  return (
    <AuthContextProvider>
      <AppNavigator />
    </AuthContextProvider>
  );
}
