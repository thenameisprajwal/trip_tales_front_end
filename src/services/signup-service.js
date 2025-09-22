// // import axios from "axios";

// // export const signupHandler = async (username, number, email, password, setAlert) => {
// //   try {
// //     const data = await axios.post(
// //       "http://localhost:3500/api/auth/register",
// //       {
// //         username: username,
// //         number: number,
// //         email: email,
// //         password: password,
// //       }
// //     );
// //     console.log("Signed Up");
// //     console.log(data);
// //     setAlert({
// //       open: true,
// //       message: `Account Created:: username - ${username}`,
// //       type: "success"
// //     })
// //   } catch (err) {
// //     console.log("error adding user to database");
// //   }
// // };

// import axios from "axios";

// export const signupHandler = async (username, number, email, password, setAlert) => {
//   try {
//     const { data } = await axios.post("http://localhost:3500/api/auth/signup", {
//       username,
//       number,
//       email,
//       password
//     });

//     setAlert({
//       open: true,
//       message: `Account Created: username - ${data.username || username}`,
//       type: "success"
//     });

//     return data;
//   } catch (err) {
//     setAlert({
//       open: true,
//       message: err.response?.data?.message || "Signup failed",
//       type: "error"
//     });
//     return {};
//   }
// };




import axios from "axios";

export const signupHandler = async (username, number, email, password, setAlert) => {
  try {
    const { data } = await axios.post("http://localhost:3500/api/auth/signup", {
      username, number, email, password
    });

    setAlert({
      open: true,
      message: `Account Created: username - ${data.username || username}`,
      type: "success"
    });

    return data;
  } catch (err) {
    setAlert({
      open: true,
      message: err.response?.data?.message || "Signup failed",
      type: "error"
    });
    return {};
  }
};
