import React, { Component } from "react";

class Login extends Component {
  componentWillMount = () => {
    /*
    socket.on("newTask", msg => {
      this.getTask();
    });

    socket.emit("unred", localStorage.getItem("user"));
    socket.on("unred", msg => {
      console.log(msg);
    });
    */
  };

  render() {
    return <div> Login </div>;
  }
}

export default Login;
