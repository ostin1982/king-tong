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
        <Route path="https://ostin1982.github.io/king-tong/" element={<HomeScreen />} />
        <Route path="https://ostin1982.github.io/king-tong/quesrs" element={<Quesrs />} />
        <Route path="https://ostin1982.github.io/king-tong/codes" element={<Codes />} />
        <Route path="https://ostin1982.github.io/king-tong/store" element={<Store />} />
        <Route path="https://ostin1982.github.io/king-tong/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App; 
