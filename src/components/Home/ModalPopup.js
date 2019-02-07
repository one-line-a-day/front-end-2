import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import TextareaAutosize from "react-textarea-autosize";

import { connect } from "react-redux";
import { editPost } from "../../actions";

class ModalPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      line: ""
    };
  }

  componentDidMount() {
    this.setState({ line: this.props.line });
  }

  modalSubmit = e => {
    console.log(this.props.post.id);
    console.log(this.state.line);
    this.props.updatePost(e, this.props.post.id, this.state.line);
  };

  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.modal === this.props.id}
          toggle={() => this.props.toggle(this.props.id)}
          className={this.props.className}
          style={{ wordWrap: "break-word" }}
        >
          <ModalHeader toggle={() => this.props.toggle(this.props.id)}>
            {this.props.date}
          </ModalHeader>
          <form onSubmit={this.modalSubmit}>
            <ModalBody>
              <TextareaAutosize
                autoFocus="true"
                type="text"
                onChange={e => this.setState({ line: e.target.value })}
                value={this.state.line}
                name="line"
                style={{
                  border: "none",
                  wordWrap: "break-word",
                  width: "100%",
                  outline: "0px",
                  resize: "none"
                }}
              />
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                onClick={() => this.props.toggle(this.props.id)}
                style={{ background: "#fd5d67", border: "1px solid #fff" }}
              >
                Cancel
              </Button>{" "}
              <Button
                color="primary"
                type="submit"
                style={{ background: "#fd5d67", border: "1px solid #fff" }}
              >
                Submit
              </Button>{" "}
            </ModalFooter>
          </form>
        </Modal>
      </div>
    );
  }
}

// const mapStateToProps = state => ({

// });

export default connect(
  null,
  {
    editPost
  }
)(ModalPopup);
