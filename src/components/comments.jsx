import React, { Component } from "react";
import LikeBtn from './likeBtn'

class Comments extends Component{
    constructor(){
        super();
    this.state = {
        id:"",
        comment:"",
        comments:[]
    }

}
updateValue=event=>{
    event.preventDefault();
    this.setState({comment: event.target.value});
}

addComment=event=>{
    event.preventDefault();
    this.setState({
        comment:"",
        comments:[...this.state.comments, this.state.comment]
    })
}
    
    render() {
        return(
            <div>
        <form className="new-comment" 
          onSubmit={this.addComment}>

          <input className="w-100" placeholder="comment here"
            onChange={this.updateValue}
            value={this.state.Comment} />

          <button className="btn btn-light btn-sm" 
              type="submit">
              Comment
          </button>

        </form>
        <table className="table mt-3">
        {this.state.comments.map((item, index) => (
            <tr>
                <td key={index} className="text-left">
                    {item}
                </td>
                <td className="text-right">
                    <LikeBtn/>
                </td>
            </tr>
        ))}
        </table>
        </div>
        );
    }
}
export default Comments;