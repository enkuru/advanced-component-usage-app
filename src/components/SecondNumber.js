/*
import React, {Component} from 'react';

class SecondNumber extends Component {
  shouldComponentUpdate(nextProps, nextState) {/!*first number her değiştiğinde render edilirken bunun da render edilmesini engellemek için bu yazılabilir*!/
    return nextProps.secondNumber !== this.props.secondNumber;/!*eğer değişirse render et*!/
  }

  render() {
    console.log("sm");
    return (
      <div>
        {this.props.secondNumber}
      </div>
    );
  }
}
*/


import React, {PureComponent} from 'react';//basitçe bu şekilde yapılabilir, ancak her yerde kullanmamalı performansa problem yapabilir

class SecondNumber extends PureComponent {
  render() {
    console.log("sm");
    return (
      <div>
        {this.props.secondNumber}
      </div>
    );
  }
}

export default SecondNumber;