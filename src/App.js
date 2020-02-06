import React,{Component} from 'react';
import LikeBtn from './components/likeBtn';
import Comments from './components/comments';

class App extends Component{
  render() {
    return (
    <div className="">
      <h1 className="text-center">Languages</h1>
      <div className="container">
                <div className="row row-cols-1 row-cols-md-3 ">
                <div className="col mb-4">
                <div className="card h-100 border-primary mw-30">
                <div className="card-body">
                <h5 className="card-title">Java <LikeBtn /></h5>
                <p className="card-text">Java is a general-purpose programming language that is class-based, object-oriented, and designed to have as few implementation dependencies as possible.</p>    
                <Comments />                
                </div>
                </div>
                </div>
                <div className="col mb-4">
                <div className="card h-100 border-secondary">
                <div className="card-body ">
                <h5 className="card-title">JavaScript <LikeBtn /> </h5>
                <p className="card-text">JavaScript, often abbreviated as JS, is a high-level, just-in-time compiled, multi-paradigm programming language that conforms to the ECMAScript specification.</p>
                <Comments /> 
                </div>
                </div>
                </div>
                <div className="col mb-4">
                <div className="card h-100 border-success">
                <div className="card-body">
                <h5 className="card-title">React <LikeBtn /> </h5>
                <p className="card-text">React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used in the development of single-page or mobile applications.</p>
                <Comments /> 
                </div>
                </div>
                </div>
                <div className="col mb-4">
                <div className="card h-100 border-dark">
                <div className="card-body">
                <h5 className="card-title">C++ <LikeBtn /> </h5>
                <p className="card-text">C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or "C with Classes".</p>
                <Comments /> 
                </div>
                </div>
                </div>
                <div className="col mb-4">
                <div className="card h-100 border-warning">
                <div className="card-body">
                <h5 className="card-title">Python <LikeBtn /> </h5>
                <p className="card-text">Python is an interpreted, high-level, general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant whitespace</p>
                <Comments /> 
                </div>
                </div>
                </div>
                <div className="col mb-4">
                <div className="card h-100 border-danger">
                <div className="card-body">
                <h5 className="card-title">Angular <LikeBtn /> </h5>
                <p className="card-text">Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.</p>
                <Comments /> 
                </div>
                </div>
                </div>
            </div>
            </div>
      </div>
  );
}
}
export default App;
