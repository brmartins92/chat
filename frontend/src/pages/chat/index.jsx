import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class Chat extends Component {
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
    return (
      <Container style={background}>
        <Row>
          <Col sm={9}>
            <div style={divChat}>
              <div>mensaaaaaaaaaaaaaaaaaaaaaa</div>
              <div>mensaaaaaaaaaaaaaaaaaaaaaa</div>
            </div>
          </Col>
          <Col sm={3} md="auto">
            <div>
              <div>Contatos</div>
              <div>contato 1</div>
              <div>contato 2</div>
              <div>contato 3</div>
              <div>contato 4</div>
            </div>
          </Col>
        </Row>
        <Row style={divSendMessage}>
          <Col sm={9}>
            <div style={inputSendMessage} contenteditable="true">
              qwewqewqweweeqweqwewqewqewqe
            </div>
            <button style={inputEnviar}>enviar</button>
          </Col>
          <Col sm={3} md="auto">
            <div>Deslogar</div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Chat;

const divChat = {
  color: "green",
  height: "80vh",
};

const divSendMessage = {
  color: "green",
  height: "20vh",
};
const inputSendMessage = {
  width: "80%",
  float: "left",
};
const inputEnviar = {
  float: "left",
};
