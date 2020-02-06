import React, { Component } from "react";

class Comments extends Component{
    state = {
        count:0,
        comment:"",
        comments:[]
      };
      incrementLike = ()=>{
        this.setState({count:this.state.count + 1});
      }
    updateValue=(val)=>{
        this.setState({ comment: val });
    }
    addComment=()=>{
        const newComment = { caption: this.state.comment };
        this.setState({ comment: "" });
        let comments = [...this.state.comments, newComment];
        this.setState({ comments: comments });
    }
    render() {
        return(
        <div className="new-comment">
          <input className="w-100" type="text" placeholder="comment here"
            onChange={e => this.updateValue(e.target.value)}
            value={this.state.comment} />
          <button className="btn btn-light btn-sm" onClick={this.addComment}>Comment</button>
          <div className="comment-list">
          {this.state.comments.map(comment => (
           <li key={this.id}></li>
          ))}
          </div>
        </div>
        );
    }
}
export default Comments;