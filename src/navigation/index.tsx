import React from 'react';
import {AuthProvider} from '../store';
import MainNavi from './MainNavi';
const Providers = () => {
  return (
    <AuthProvider>
      <MainNavi />
    </AuthProvider>
  );
};

export default Providers;
