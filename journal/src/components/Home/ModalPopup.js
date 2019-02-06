import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.modal == this.props.id}
          toggle={() => this.props.toggle(this.props.id)}
          className={this.props.className}
        >
          <ModalHeader toggle={() => this.props.toggle(this.props.id)}>
            {this.props.date}
          </ModalHeader>
          <ModalBody>
            <div>{this.props.line}</div>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.props.toggle(this.props.id)}
              style={{ background: "#fd5d67", border: "1px solid #fff" }}
            >
              Close
            </Button>{" "}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalPopup;
