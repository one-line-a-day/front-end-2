import React, { Component } from "react";
import TextareaAutosize from "react-textarea-autosize";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

library.add(faCalendar);

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <form className="newEntry">
          <div style={{ display: "flex" }}>
            <FontAwesomeIcon
              icon="calendar"
              style={{
                marginTop: "7px",
                marginLeft: "10px"
              }}
            >
              {" "}
            </FontAwesomeIcon>
            <input
              style={{
                border: "1px solid #dfdbdb",
                marginBottom: "10px",
                paddingLeft: "10px",
                background: "#dfdbdb"
              }}
              type="date"
              name="date"
              value={this.props.date}
              onChange={this.props.onChange}
            />
          </div>

          <div
            style={{
              background: "#dfdbdb;",
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
                border: "none",
                paddingLeft: "10px",
                background: "#dfdbdb"
              }}
              placeholder="How's your day? 🎉"
              name="line"
              value={this.props.line}
              onChange={this.props.onChange}
            />

            {!this.props.isEditing ? (
              <button
                style={{
                  marginLeft: "90%",
                  background: "#fd5d67",
                  border: "2px solid pink",
                  borderRadius: "5px",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "13px"
                }}
                onClick={this.props.createPost}
              >
                Post
              </button>
            ) : (
              <button
                style={{
                  marginLeft: "90%",
                  background: "#fd5d67",
                  border: "2px solid pink",
                  borderRadius: "5px",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "13px"
                }}
                onClick={this.props.updatePost}
              >
                Finish
              </button>
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default NewPost;
