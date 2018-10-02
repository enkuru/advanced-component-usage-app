import React, {Component} from 'react';

class FirstNumber extends Component {
  render() {
    console.log("fm");
    return (
      <div>
        {this.props.firstNumber}
      </div>
    );
  }
}

export default FirstNumber;