import React, { useRef, useState } from "react";

import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from "../UI/ErrorModal";

const AddUser = props => {

    const usernameInputRef = useRef();
    const ageInputRef = useRef();
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();

        const enteredUsername = usernameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

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

        usernameInputRef.current.value = '';
        ageInputRef.current.value = '';
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
              ref={usernameInputRef}
            />

            <label htmlFor="age">Age (Years)</label>
            <input
              id="age"
              type="number"
              ref={ageInputRef}
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