import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomeScreen from './HomeScreen';
import Quesrs from './Quesrs';
import Codes from './Codes';
import Store from './Store';
import Settings from './Settings';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/quesrs" element={<Quesrs />} />
        <Route path="/codes" element={<Codes />} />
        <Route path="/store" element={<Store />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App; 
