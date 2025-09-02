
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      dislikes: 0,
      ratings: 0,      
    };
    
  }

  handleLike = () => {
    this.setState((prevState) => ({
      likes: prevState.likes + 1,
      ratings: prevState.ratings + 1
    }));
  }

  handleDislike = () => {
    this.setState((prevState) => ({
      likes: prevState.likes - 1,
      ratings: prevState.ratings + 1
    }));
  }

  render() {
    return (
     <>
     <div className="content-rating">
      <p>
      React.js was created at Facebook by Jordan Walke in 2011 as an internal prototype called FaxJs, building on the internal component framework XHP. It was first used to improve the real-time updates on the Facebook News Feed and was open-sourced in 2013. The library gained popularity for its use of a Virtual DOM for performance and a component-based architecture for building user interfaces, and it remains a project maintained by Meta (formerly Facebook) and its open-source community. 
      </p>
        <div className="rating-buttons">
        <button class="like-button" onClick={this.state.handleLike}>
          Like ({this.state.likes})
        </button>
        <button class="dislike-button" onClick={this.state.handleDislike}>
          Dislike ({this.state.dislikes})
        </button>
        <p>Total ratings: {this.state.ratings}</p>
        </div>
     </div>
     </>
    );
  }
}

export default ContentRating;
