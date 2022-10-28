import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {  

  const [usersList, setUsersList] = useState([]);

  const handleAddNewuser = (newUser) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: newUser.enteredUsername, age: newUser.enteredAge, id: Math.random().toString },
      ];
    });
  }



  return (
    <div>
      <AddUser onAddNewuser={handleAddNewuser} />
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
