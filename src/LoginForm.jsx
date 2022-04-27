import React, { useState } from "react";
import "./style.css";

//
function LoginForm() {
  // Create useState
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userName, setUserName] = useState(null);
  const [userPass, setUserPass] = useState(null);
  const [data, setData] = useState([]);
  const [showerror, setshowError] = useState(false);

  // Define error data
  // const errors = { uname: "User doesn't exist !", pass: "Password is wrong !" };

  const handleSubmit = (event) => {
    event.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: userName,
        password: userPass,
      }),
      // authorization:
      // "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiODdiNWY4NjIyNGFlZjMwYjc2OGViNTYwOGM4ZWUwMzVmYTA2MWI0NmQ2YzAzNDhiOTQ3ODQ4YjMwNmM4MzU1ODI3MmFmMzY5NDIxZWYzN2QiLCJpYXQiOjE2MjUyMzIyMzIsIm5iZiI6MTYyNTIzMjIzMiwiZXhwIjoxNjU2NzY4MjMyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.cLpzYEBXLwcGk_G_9LOFqSDhSrWfoVB5JuGAkVwZJPy6Y2yxrue34aLsfNmW_62LMJWJ7iPaebNVNcz57KM48l9yJDFN0Mdx_detubp9qvr-iE4BXwMCLgWFTuzD-E0JvZnUu9UKIkkb2dJn5-Q2ZQqO9j8rlZH-9iWQR9ECcS30ZFdds3PVj5oH6tjJ8x0vGcq5L7GT5MESNY0pHpl7QknDwU6H8UERe-ChR7DQS_o5uQbJLgyqA3vEovjof5a23V-0rF5YAxSR_lRjVeqVJU0f81wNF7tW4AHzCLH4J9DkLXDb-whNk4BGvgn3K3PA5Nb_aqaQPECY0XTwP0o6rkqiBBJr7RQ8w-pBOoENqa7GSU5wFnYL9OtYV87Bq9wk4jceoGs_tYkfbgoL9cEoNxUyUZFH3heBJ3a43to2H3ET4oWXGmiWG7QVDfaepK0awGxyfnd3nkxCE8zXVQAP8tszIZY9OQ20tqQJfMbctYucG16Fu3xFTNqmy7aTrGy_NZmexithjjDzzrFPlncMdban6ICKQZBjejn68AZ9ELYJZyz1gcF8TLODahkBFFMa0Az3idySiDsesqf-VZxF4cM2Z261YGMnfx-qj7I2E_L6O4Uv-16XYol3U89R6uZH5n7ypyZ1cl6_QXYNFPkr0ERMnCyNehhORiv2O8rhfz8",
    };

    fetch(`http://apit.bluerickshaw.com/api/login`, requestOptions)
      .then((res) => res.json())
      .then((jsonData) => {
        console.log(jsonData);
        if (jsonData.status === 200) {
          setErrorMessages(jsonData.message);
          setshowError(true);
        }
        setData(jsonData);
        if (jsonData.status === 500) {
          setErrorMessages(jsonData.message);
          setshowError(true);
        }
      });

    //Find user in database
    // const userData = data.find((user) => user.email === userName);

    // Compare the data || From database and the entered data by the user

    // Check if passowrd entred is wrong or not

    // if (userData) {
    //   if (userData.pass !== userPass) {
    //     setErrorMessages({ name: "pass", message: errors.pass });
    //   } else {
    //     setUserName(uname.value);
    //     setUserPass(pass.value);
    //     setIsSubmitted(true);
    //   }
    // } else {
    //   setErrorMessages({ name: "uname", message: errors.uname });
    // }
  };

  // console.log(errorMessages);

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
          <label>Email</label>
          <input
            type="email"
            name="uname"
            className="userNameInput"
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />

          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password</label>
          <input
            type="password"
            name="pass"
            className="userPassInput"
            required
            value={userPass}
            onChange={(e) => setUserPass(e.target.value)}
          />

          {renderErrorMessage("pass")}
        </div>
        {showerror === true ? (
          <div>
            <p>{errorMessages}</p>
          </div>
        ) : (
          ""
        )}

        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <>
      <div>
        {isSubmitted ? (
          <div>
            User successfully logged .
            {/* and your username is {userName} and
            password is {userPass} */}
          </div>
        ) : (
          renderForm
        )}
      </div>
    </>
  );
  //
}

export default LoginForm;
