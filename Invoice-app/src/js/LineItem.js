import React, { Component } from 'react';
import '../css/LineItem.css';

class LineItem extends Component {
  static propTypes = {
    description: React.PropTypes.string.isRequired,
    amount: React.PropTypes.string.isRequired,
  };

  render() {
    return (
      <div>
        <div className="desc-box">
          <input
            type="text"
            name="description"
            value={this.props.description}
            onChange={event => this.props.updLine(event, this.props.index)}
          />
        </div>
        <div className="amount-box">
          <input
            type="number"
            name="amount"
            value={this.props.amount}
            onChange={event => this.props.updLine(event, this.props.index)}
          />
        </div>
      </div>
    );
  }
}

export default LineItem;
