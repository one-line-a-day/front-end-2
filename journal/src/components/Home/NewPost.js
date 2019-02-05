import React, { Component } from "react";
import TextareaAutosize from "react-textarea-autosize";

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <form className="newEntry">
          <input
            style={{ border: "1px solid black", marginBottom: "10px" }}
            type="date"
            name="date"
            value={this.props.date}
            onChange={this.props.onChange}
          />
          <div
            style={{
              border: "1px solid black",
              background: "white",
              paddingBottom: "15px"
            }}
          >
            <TextareaAutosize
              style={{
                outline: "0px",
                resize: "none",
                marginTop: "10px",
                height: "40px",
                width: "100%",
                border: "none"
              }}
              placeholder="How's your day? 🎉"
              name="line"
              value={this.props.line}
              onChange={this.props.onChange}
            />

            <button
              style={{
                marginLeft: "600px",
                background: "#fd5d67",
                border: "2px solid purple",
                borderRadius: "5px",
                color: "white",
                fontWeight: "bold",
                fontSize: "13px"
              }}
              onClick={this.props.createPost}
            >
              Post
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewPost;
