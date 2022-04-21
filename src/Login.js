import React, { useState } from "react";
import "./style.css";

//
function Login() {
  // Create useState
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userName, setUserName] = useState({});
  const [userPass, setUserPass] = useState({});

  const dataBase = [
    {
      username: "user1",
      pass: "user123",
    },
    {
      username: "user2",
      pass: "user234",
    },
    {
      username: "user3",
      pass: "user345",
    },
  ];

  // Define error data
  const errors = { uname: "User doesn't exist !", pass: "Password is wrong !" };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Data from the form
    var { uname, pass } = document.forms[0];

    //Printing data from form to console
    console.log("Username \t" + uname.value + "\nPassword\t" + pass.value);
    // console.log(uname, pass, document.forms[0]);

    //Find user in database
    const userData = dataBase.find((user) => user.username === uname.value);

    // Compare the data || From database and the entered data by the user

    if (userData) {
      if (userData.pass !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setUserName(uname.value);
        setUserPass(pass.value);
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };
  console.log(errorMessages);

  // Generate JSX code to handle the error message
  const renderErrorMessage = (name) => {
    if (name === errorMessages.name) {
      return <div>{errorMessages.message}</div>;
    }
  };

  // login Form JSX
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username</label>
          <input type="text" name="uname" className="userNameInput" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password</label>
          <input
            type="password"
            name="pass"
            className="userPassInput"
            required
          />
          {renderErrorMessage("pass")}
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div>
      {isSubmitted ? (
        <div>
          User successfully logged in and your username is {userName} and
          password is {userPass}
        </div>
      ) : (
        renderForm
      )}
    </div>
  );
  //
}

export default Login;
