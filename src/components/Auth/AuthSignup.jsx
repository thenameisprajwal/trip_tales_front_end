// // import "./Auth.css";
// // import { useAuth, useAlert } from "../../context";
// // import {
// //   validateEmail,
// //   validateName,
// //   validateNumber,
// //   validatePassword,
// // } from "../../utils";

// // import { signupHandler } from "../../services";

// // let isNumberValid,
// //   isNameValid,
// //   isEmailValid,
// //   isPasswordValid,
// //   isConfirmPasswordValid;

// // export const AuthSignup = () => {
// //   const { username, email, password, number, confirmPassword, authDispatch } =
// //     useAuth();
  
// //   const { setAlert } = useAlert();

// //   const handleNumberChange = (event) => {
// //     isNumberValid = validateNumber(event.target.value);
// //     if (isNumberValid) {
// //       console.log("Valid Input");
// //       authDispatch({
// //         type: "NUMBER",
// //         payload: event.target.value,
// //       });
// //     } else {
// //       console.log("Invalid Number");
// //     }
// //   };

// //   const handleNameChange = (event) => {
// //     isNameValid = validateName(event.target.value);
// //     if (isNameValid) {
// //       console.log("Valid Input");
// //       authDispatch({
// //         type: "NAME",
// //         payload: event.target.value,
// //       });
// //     } else {
// //       console.log("Invalid Name");
// //     }
// //   };

// //   const handleEmailChange = (event) => {
// //     isEmailValid = validateEmail(event.target.value);
// //     if (isEmailValid) {
// //       console.log("Valid Input");
// //       authDispatch({
// //         type: "EMAIL",
// //         payload: event.target.value,
// //       });
// //     } else {
// //       console.log("Invalid Email");
// //     }
// //   };

// //   const handlePasswordChange = (event) => {
// //     isPasswordValid = validatePassword(event.target.value);
// //     if (isPasswordValid) {
// //       console.log("Valid Input");
// //       authDispatch({
// //         type: "PASSWORD",
// //         payload: event.target.value,
// //       });
// //     } else {
// //       console.log("Invalid Password");
// //     }
// //   };

// //   const handleConfirmPasswordChange = (event) => {
// //     isConfirmPasswordValid = validatePassword(event.target.value);
// //     if (isConfirmPasswordValid) {
// //       console.log("Valid Input");
// //       authDispatch({
// //         type: "CONFIRM_PASSWORD",
// //         payload: event.target.value,
// //       });
// //     } else {
// //       console.log("Invalid Password");
// //     }
// //   };

// //   // const handleFormSubmit = (event) => {
// //   //   event.preventDefault();
// //   //   if (
// //   //     isNumberValid &&
// //   //     isNameValid &&
// //   //     isEmailValid &&
// //   //     isPasswordValid &&
// //   //     isConfirmPasswordValid
// //   //   ) {
// //   //     signupHandler(username, number, email, password, setAlert);
// //   //   }
// //   //   authDispatch({
// //   //     type: "CLEAR_USER_DATA",
// //   //   });
// //   // };
// //   const handleFormSubmit = async (e) => {
// //   e.preventDefault();

// //   if (isNumberValid && isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
// //     const result = await signupHandler(username, number, email, password, setAlert);

// //     if (result._id) {  // user created successfully
// //       authDispatch({ type: "CLEAR_USER_DATA" });
// //     }
// //   }
// // };

// //   return (
// //     <div className="auth-container">
// //       <form onSubmit={handleFormSubmit}>
// //         <div className="d-flex direction-column lb-in-container">
// //           <label className="auth-label">
// //             Mobile Number <span className="asterisk">*</span>{" "}
// //           </label>
// //           <input
// //             defaultValue={number}
// //             type="number"
// //             className="auth-input"
// //             maxLength="10"
// //             placeholder="Enter Mobile Number"
// //             required
// //             onChange={handleNumberChange}
// //           />
// //         </div>
// //         <div className="d-flex direction-column lb-in-container">
// //           <label className="auth-label">
// //             Name <span className="asterisk">*</span>{" "}
// //           </label>
// //           <input
// //             defaultValue={username}
// //             className="auth-input"
// //             placeholder="Enter Name"
// //             required
// //             onChange={handleNameChange}
// //           />
// //         </div>
// //         <div className="d-flex direction-column lb-in-container">
// //           <label className="auth-label">
// //             Email <span className="asterisk">*</span>{" "}
// //           </label>
// //           <input
// //             defaultValue={email}
// //             className="auth-input"
// //             placeholder="Enter Email"
// //             type="email"
// //             required
// //             onChange={handleEmailChange}
// //           />
// //         </div>
// //         <div className="d-flex direction-column lb-in-container">
// //           <label className="auth-label">
// //             Password <span className="asterisk">*</span>{" "}
// //           </label>
// //           <input
// //             defaultValue={password}
// //             className="auth-input"
// //             placeholder="Enter Password"
// //             type="password"
// //             required
// //             onChange={handlePasswordChange}
// //           />
// //         </div>
// //         <div className="d-flex direction-column lb-in-container">
// //           <label className="auth-label">
// //             Confirm Password <span className="asterisk">*</span>{" "}
// //           </label>
// //           <input
// //             defaultValue={confirmPassword}
// //             className="auth-input"
// //             placeholder="Enter Password"
// //             type="password"
// //             required
// //             onChange={handleConfirmPasswordChange}
// //           />
// //         </div>
// //         <div>
// //           <button className="button btn-primary btn-login cursor">
// //             Submit
// //           </button>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // };
// import "./Auth.css";
// import { validateNumber, validatePassword } from "../../utils";
// import { signupHandler } from "../../services";
// import { useAuth, useAlert } from "../../context";

// let isNumberValid, isPasswordValid;

// export const AuthSignup = () => {
//   const { authDispatch, number, password, username, email } = useAuth();
//   const { setAlert } = useAlert();

//   const handleUsernameChange = (event) => {
//     authDispatch({ type: "USERNAME", payload: event.target.value });
//   };

//   const handleEmailChange = (event) => {
//     authDispatch({ type: "EMAIL", payload: event.target.value });
//   };

//   const handleNumberChange = (event) => {
//     isNumberValid = validateNumber(event.target.value);
//     if (isNumberValid) {
//       authDispatch({ type: "NUMBER", payload: event.target.value });
//     } else {
//       console.log("Invalid Number");
//     }
//   };

//   const handlePasswordChange = (event) => {
//     isPasswordValid = validatePassword(event.target.value);
//     if (isPasswordValid) {
//       authDispatch({ type: "PASSWORD", payload: event.target.value });
//     } else {
//       console.log("Invalid Password");
//     }
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault(); // prevent page reload

//     if (isNumberValid && isPasswordValid) {
//       try {
//         await signupHandler(username, number, email, password, setAlert);

//         // Clear form after successful signup
//         authDispatch({ type: "CLEAR_USER_DATA" });
//         authDispatch({ type: "SHOW_AUTH_MODAL" });
//       } catch (err) {
//         setAlert({
//           open: true,
//           message: "Signup Failed!",
//           type: "error"
//         });
//       }
//     }
//   };

//   return (
//     <div className="auth-container">
//       <form onSubmit={handleFormSubmit}>
//         <div className="d-flex direction-column lb-in-container">
//           <label className="auth-label">Username <span className="asterisk">*</span></label>
//           <input
//             defaultValue={username}
//             type="text"
//             className="auth-input"
//             placeholder="Enter Username"
//             required
//             onChange={handleUsernameChange}
//           />
//         </div>

//         <div className="d-flex direction-column lb-in-container">
//           <label className="auth-label">Email <span className="asterisk">*</span></label>
//           <input
//             defaultValue={email}
//             type="email"
//             className="auth-input"
//             placeholder="Enter Email"
//             required
//             onChange={handleEmailChange}
//           />
//         </div>

//         <div className="d-flex direction-column lb-in-container">
//           <label className="auth-label">Mobile Number <span className="asterisk">*</span></label>
//           <input
//             defaultValue={number}
//             type="number"
//             className="auth-input"
//             placeholder="Enter Mobile Number"
//             required
//             onChange={handleNumberChange}
//           />
//         </div>

//         <div className="d-flex direction-column lb-in-container">
//           <label className="auth-label">Password <span className="asterisk">*</span></label>
//           <input
//             defaultValue={password}
//             className="auth-input"
//             placeholder="Enter Password"
//             type="password"
//             required
//             onChange={handlePasswordChange}
//           />
//         </div>

//         <div>
//           <button className="button btn-primary btn-login cursor">Signup</button>
//         </div>
//       </form>
//     </div>
//   );
// };


import "./Auth.css";
import { validateNumber, validatePassword } from "../../utils";
import { signupHandler as signupService } from "../../services";
import { useAuth, useAlert } from "../../context";

let isNumberValid = false, isPasswordValid = false;

export const AuthSignup = () => {
  const { authDispatch, number, password, username, email } = useAuth();
  const { setAlert } = useAlert();

  const handleUsernameChange = (e) => {
    authDispatch({ type: "USERNAME", payload: e.target.value });
  };
  const handleEmailChange = (e) => {
    authDispatch({ type: "EMAIL", payload: e.target.value });
  };
  const handleNumberChange = (e) => {
    isNumberValid = validateNumber(e.target.value);
    authDispatch({ type: "NUMBER", payload: e.target.value });
  };
  const handlePasswordChange = (e) => {
    isPasswordValid = validatePassword(e.target.value);
    authDispatch({ type: "PASSWORD", payload: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!username.trim()) return setAlert({ open: true, message: "Username is required", type: "error" });
    if (!email.trim()) return setAlert({ open: true, message: "Email is required", type: "error" });
    if (!isNumberValid) return setAlert({ open: true, message: "Invalid Number", type: "error" });
    if (!isPasswordValid) return setAlert({ open: true, message: "Invalid Password", type: "error" });

    try {
      await signupService(username, number, email, password, setAlert);
      authDispatch({ type: "CLEAR_USER_DATA" });
      authDispatch({ type: "SHOW_AUTH_MODAL" });
    } catch {
      setAlert({ open: true, message: "Signup Failed!", type: "error" });
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleFormSubmit}>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">Username *</label>
          <input
            value={username}
            type="text"
            className="auth-input"
            placeholder="Enter Username"
            required
            onChange={handleUsernameChange}
          />
        </div>

        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">Email *</label>
          <input
            value={email}
            type="email"
            className="auth-input"
            placeholder="Enter Email"
            required
            onChange={handleEmailChange}
          />
        </div>

        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">Mobile Number *</label>
          <input
            value={number}
            type="number"
            className="auth-input"
            placeholder="Enter Mobile Number"
            required
            onChange={handleNumberChange}
          />
        </div>

        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">Password *</label>
          <input
            value={password}
            type="password"
            className="auth-input"
            placeholder="Enter Password"
            required
            onChange={handlePasswordChange}
          />
        </div>

        <div>
          <button className="button btn-primary btn-login cursor">Signup</button>
        </div>
      </form>
    </div>
  );
};

