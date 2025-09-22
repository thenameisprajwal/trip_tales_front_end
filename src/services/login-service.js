// import axios from "axios";

// export const loginHandler = async (number, password, setAlert) => {
//   try {
//     const {
//       data: { accessToken, username },
//     } = await axios.post(
//       "http://localhost:3500/api/auth/login",
//       {
//         number: number,
//         password: password,
//       }
//     );
//     console.log("Logged IN");
//     console.log({ accessToken, username });
//     localStorage.setItem("token", accessToken);
//     localStorage.setItem("username", username);
//     setAlert({
//       open: true,
//       message: "Login Successful!",
//       type: "success"
//     })
//     return { accessToken, username };
//   } catch (err) {
//     console.log("unable to login");
//   }
// };


import axios from "axios";

export const loginHandler = async (number, password, setAlert) => {
  try {
    const {
      data: { accessToken, user }
    } = await axios.post("http://localhost:3500/api/auth/login", {
      number,
      password
    });

    localStorage.setItem("token", accessToken);
    localStorage.setItem("username", user.username);

    setAlert({
      open: true,
      message: "Login Successful!",
      type: "success"
    });

    return { accessToken, username: user.username };
  } catch (err) {
    setAlert({
      open: true,
      message: err.response?.data?.message || "Login failed",
      type: "error"
    });
    return {};
  }
};
