import React from 'react';
import Header from './Header';
import Keyboard from './Keyboard';
import Sidebar from './Sidebar';

const App = () => (
  <section className="Main">
    <Header />
    <div className="Main__Content">
      <Sidebar />
      <div className="Main__Content__Piano">
        <Keyboard />
      </div>
    </div>
  </section>
);

export default App;
