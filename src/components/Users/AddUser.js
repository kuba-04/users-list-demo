import React, { useState } from "react";

import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from "../UI/ErrorModal";

const AddUser = props => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();

        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age'
            })
            return;
        }
        if (+enteredAge < 0) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age'
            })
            return;
        }
        
        props.onAddNewuser({enteredUsername, enteredAge});
        setEnteredUsername('');
        setEnteredAge('');
    }

    const handleUsernameChange = (event) => {
        setEnteredUsername(event.target.value);
    }

    const handleAgeChange = (event) => {
        setEnteredAge(event.target.value);
    }

    const dismissError = () => {
        setError(null);
    }

    // const isValid = enteredUsername.length > 0 && enteredAge.length > 0;

    return (
      <div>
        {error && <ErrorModal dismissError={dismissError} title={error.title} message={error.message}/>}
        <Card className={classes.input}>
          <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={enteredUsername}
              onChange={handleUsernameChange}
            />

            <label htmlFor="age">Age (Years)</label>
            <input
              id="age"
              type="number"
              value={enteredAge}
              onChange={handleAgeChange}
            />

            <Button onClick={addUserHandler} type="button">
              Add User
            </Button>
          </form>
        </Card>
      </div>
    );
};

export default AddUser;