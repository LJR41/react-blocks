import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import SubContents from './components/Subcontents';
import Advertisement from './components/Advertisement';

// Pair Programming with Cohort
function App() {
  return (
    <div className="app">
      <div>
        <Header />
      </div>
      <div className='flex'>
        <div>
          <Navigation />
        </div>
        <div>
          <Main>
            <div className='flex'>
              <SubContents />
              <SubContents />
              <SubContents />
            </div>
            <div classname='flex'>
              <Advertisement />
            </div>
          </Main>
        </div>
      </div>
    </div>
  );
}

export default App;


