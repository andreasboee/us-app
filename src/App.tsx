import * as React from 'react';
import './App.css';
// import NavigationDrawer from './components/Drawer/navigationDrawer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MapScreen from './screens/mapScreen';
import { Button } from '@mui/material';

function Root() {
  return (
    <div>
      <Button>hello</Button>
      {/* <NavigationDrawer /> */}

      <Routes>
        <Route path="/" element={<MapScreen />} />
        {/* <Route path="/home" element={<Home />} />
        <Route path="/upcoming/:user" element={<Upcoming />} />
        <Route path="/record/:user" element={<Record />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}


function App() {
  return (
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  );
}

export default App;