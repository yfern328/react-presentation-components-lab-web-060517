// Code SimpleComponentHere Here

import React from 'react';

class SimpleComponent extends React.Component {
  constructor(){
    super()

    this.state = {
      mood: 'happy'
    }
  }

  toggleMood = (event) => {
    this.setState({
      mood: 'sad'
    })
  }

  render(){
    return(
      <div onClick={this.toggleMood}>
        {this.state.mood}
      </div>
    );
  }
};

export default SimpleComponent;
