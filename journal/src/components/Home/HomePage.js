import React, { Component } from "react";

import { connect } from "react-redux";
import { getPosts, addPost, deletePost, editPost } from "../../actions";
import NavBar from "./NavBar";
import NewPost from "./NewPost";
class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      line: "",
      date: ""
    };
  }

  componentDidMount() {
    this.props.getPosts();
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  createPost = e => {
    e.preventDefault();
    const newPost = {
      line: this.state.line,
      date: this.state.date
    };
    this.props.addPost(newPost);
    this.setState({
      line: "",
      date: ""
    });
  };

  render() {
    return (
      <div className="homePage">
        <NavBar />
        <div className="under-nav-container">
          <h2>Home Page</h2>
          <NewPost
            date={this.state.date}
            line={this.state.line}
            onChange={this.onChange}
          />

          <div className="posts-container">
            {this.props.posts
              ? this.props.posts.map(post => {
                  return (
                    <div className="post">
                      <p className="post.attribute">{post.user_id}</p>
                      <p className="post.attribute">{post.line}</p>
                      <p className="post.attribute">{post.date}</p>
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
