import React, { Component } from "react";

import { connect } from "react-redux";
import { getPosts, addPost, deletePost, editPost } from "../../actions";
import NavBar from "./NavBar";
import NewPost from "./NewPost";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import ModalPopup from "./ModalPopup";
import { Timeline, TimelineEvent } from "react-event-timeline";

library.add(faTrash, faEdit);
class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      line: "",
      date: "",
      user_id: null,
      isEditing: false,
      modal: null
    };
  }

  componentDidMount() {
    this.props.getPosts();
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  createPost = e => {
    e.preventDefault();
    const newPost = {
      line: this.state.line,
      date: this.state.date
    };
    console.log(newPost);
    this.props.addPost(newPost);
    this.setState({
      line: "",
      date: ""
    });
  };

  erasePost = (e, id) => {
    e.preventDefault();
    console.log(id);
    this.props.deletePost(id);
  };

  toggle = id => {
    let result;
    if (this.state.modal === id) {
      result = null;
    } else {
      result = id;
    }
    return this.setState(
      prevState => ({
        modal: result
      }),
      () => console.log("NEW STATE: ", this.state)
    );
  };

  populateForm = (e, post) => {
    e.preventDefault();
    this.setState({
      line: post.line,
      date: post.date,
      user_id: post.id,
      isEditing: true
    });
    this.toggle(post.id);
  };

  updatePost = (e, id, editedPost) => {
    e.preventDefault();
    this.props.editPost(id, editedPost);
    this.setState({ line: "", date: "", user_id: null, isEditing: false });
    this.toggle(id);
  };

  render() {
    return (
      <div className="homePage">
        <NavBar />
        <div className="under-nav-container">
          <NewPost
            date={this.state.date}
            line={this.state.line}
            onChange={this.onChange}
            posts={this.props.posts}
            createPost={this.createPost}
            isEditing={this.state.isEditing}
            updatePost={this.updatePost}
          />

          <Timeline>
            {this.props.posts
              ? this.props.posts.map((post, index) => {
                  return (
                    <TimelineEvent
                      cardHeaderStyle={{ display: "none" }}
                      bubbleStyle={{
                        background: "#442587",
                        border: "1px solid #fdb9ac"
                      }}
                      contentStyle={{
                        textAlign: "left",
                        width: "90%",
                        border: "2px solid offwhite",
                        backgroundColor: "white",
                        marginBottom: "20px",
                        wordWrap: "break-word",
                        borderRadius: "10px",
                        boxShadow: "1px 1px 3px gray"
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column"
                        }}
                      >
                        <p className="post-attribute-date">{post.date}</p>
                        <div className="icons">
                          <FontAwesomeIcon
                            icon="edit"
                            color="#fd5d67"
                            onClick={() => this.toggle(index)}
                            cursor="pointer"
                          />
                          <FontAwesomeIcon
                            icon="trash"
                            color="#fd5d67"
                            onClick={e => this.erasePost(e, post.id)}
                            cursor="pointer"
                          />
                        </div>
                        <ModalPopup
                          line={post.line}
                          date={post.date}
                          toggle={this.toggle}
                          modal={this.state.modal}
                          id={index}
                          postID={post.id}
                          userID={this.state.user_id}
                          updatePost={this.updatePost}
                          post={post}
                        />
                        <p
                          className="post-attribute-line"
                          style={{
                            color: "black"
                          }}
                        >
                          {post.line}
                        </p>
                      </div>
                    </TimelineEvent>
                  );
                })
              : null}
          </Timeline>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(
  mapStateToProps,
  { getPosts, addPost, deletePost, editPost }
)(HomePage);
