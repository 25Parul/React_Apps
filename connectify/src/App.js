import React, { useState } from 'react';
import Navbar from './Components/Nav/Navbar';
import Form from './Components/Form/Form';
import Sidebar from './Components/Sidebar/Sidebar';
import './App.css';

function App() {
  const [hideSidebar, setHideSidebar] = useState(false);

  const handleClick = () => {
    setHideSidebar(!hideSidebar);
  };

  return (
    <div className="App">
      <h1>Welcome to my app!</h1>
      <Navbar />
      <div className="content">
        <Form />
        {hideSidebar ? null : <Sidebar />}
        <button onClick={handleClick}>{hideSidebar ? 'Display' : 'Hide'}</button>
      </div>
    </div>
  );
}

export default App;
