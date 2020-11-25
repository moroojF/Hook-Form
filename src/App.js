import 'bootstrap/dist/css/bootstrap.min.css';
import PersonForm from './components/PersonForm';
import PersonCard from './components/PersonCard';
import React, { useState } from 'react';

function App() {
  const [user, setUser] = useState({});
  return (
    <>
      <div className="container">
        <div className="row">
          <PersonForm setUser={setUser} />
          <div className="col-sm-3"></div>
          <PersonCard user={user} />
        </div>
      </div>
    </>
  );
}

export default App;
