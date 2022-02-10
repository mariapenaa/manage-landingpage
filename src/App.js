
import './App.scss';
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Header from 'components/Header/Header';
import Body from 'components/Body/Body'

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Routes>
          <Route path="/manage-landingpage/" element={<Body />}  />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
