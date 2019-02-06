import React, { Component } from "react";

import { connect } from "react-redux";
import { getPosts, addPost, deletePost, editPost } from "../../actions";
import NavBar from "./NavBar";
import NewPost from "./NewPost";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash, faEdit);
class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      line: "",
      date: "",
      user_id: null,
      isEditing: false
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

  populateForm = (e, post) => {
    e.preventDefault();
    this.setState({
      line: post.line,
      date: post.date,
      user_id: post.id,
      isEditing: true
    });
  };

  updatePost = e => {
    e.preventDefault();
    const editedPost = {
      line: this.state.line,
      date: this.state.date
    };
    this.props.editPost(this.state.user_id, editedPost);
    this.setState({ line: "", date: "", user_id: null, isEditing: false });
  };

  render() {
    return (
      <div className="homePage">
        <NavBar />
        <div className="under-nav-container">
          <h2>Your One-Liners</h2>
          <NewPost
            date={this.state.date}
            line={this.state.line}
            onChange={this.onChange}
            posts={this.props.posts}
            createPost={this.createPost}
            isEditing={this.state.isEditing}
            updatePost={this.updatePost}
          />

          <div className="posts-container">
            {this.props.posts
              ? this.props.posts.map(post => {
                  return (
                    <div className="post">
                      <p className="post-attribute-line">{post.line}</p>
                      <div className="post-bottom-row">
                        <p className="post-attribute-date">Date: {post.date}</p>
                        <div className="icons">
                          <FontAwesomeIcon
                            icon="edit"
                            color="#fdb9ac"
                            onClick={e => this.populateForm(e, post)}
                            cursor="pointer"
                          />
                          <FontAwesomeIcon
                            icon="trash"
                            color="#fdb9ac"
                            onClick={e => this.erasePost(e, post.id)}
                            cursor="pointer"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
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
