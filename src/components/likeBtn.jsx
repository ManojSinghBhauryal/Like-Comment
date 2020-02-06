import React, { Component } from "react";
class LikeBtn extends Component{
    state = {
        count:0
      };
      incrementLike = ()=>{
        this.setState({count:this.state.count + 1});
      }
      
    render() {
        return(
            <span>
                <button className="btn btn-danger btn-sm" onClick={()=> this.incrementLike()}>like  
                <span className="badge badge-pill badge-warning mr-10 float-left">{this.state.count}</span>
                </button>
            </span>
        );
    }
}
export default LikeBtn;