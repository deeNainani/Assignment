import React, { Component } from 'react';
import '../css/Total.css';

class Total extends Component {
  static propTypes = {
    total: React.PropTypes.string,
  };

  render() {
    return (
      <div>
        <label> Total </label>
        <label>
          {this.props.total}{' '}
        </label>
      </div>
    );
  }
}

export default Total;
