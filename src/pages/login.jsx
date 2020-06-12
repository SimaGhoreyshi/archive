// import React, { Component } from "react";
// import axios from "axios";
// import { Route } from "react-router-dom";
// import UserInfo from "./user-info";

// export let validation = false;
// class Login extends Component {
//   constructor() {
//     super();

//     this.state = {
//       id: "",
//       email: "",
//       password: "",
//       users: [],
//     };

//     this.onChangeEmail = this.onChangeEmail.bind(this);
//     this.onChangePassword = this.onChangePassword.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//   }

//   onChangeEmail(e) {
//     this.setState({ email: e.target.value });
//   }

//   onChangePassword(e) {
//     this.setState({ password: e.target.value });
//   }
//   componentDidMount() {
//     axios
//       .get("http://localhost:5000/users")
//       .then((res) => {
//         this.setState({ users: res.data });
//         console.log(this.state.users);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
//   onSubmit(e) {
//     e.preventDefault();

//     const { email, password, users } = this.state;

//     for (let i = 0; i < this.state.users.length; i++) {
//       if (users[i].email === email && users[i].password === password) {
//         validation = true;
//         this.setState({ id: users[0]._id });
//       } else validation = false;
//     }
//     console.log(validation + "from login");

//     // if (validation === true) {
//     //   this.props.history.push("/");
//     // }
//   }

//   render() {
//     return (
//       <div className="container center">
//         <form onSubmit={this.onSubmit}>
//           <input
//             className="form-control"
//             type="text"
//             placeholder="ایمیل"
//             name="email"
//             value={this.state.email}
//             onChange={this.onChangeEmail}
//           />
//           <input
//             className="form-control"
//             type="text"
//             placeholder="کلمه عبور"
//             name="password"
//             value={this.state.password}
//             onChange={this.onChangePassword}
//           />
//           <button
//             className="btn btn-primary"
//             value="submit"
//             onClick={this.onSubmit}
//           >
//             ورود
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Login;
