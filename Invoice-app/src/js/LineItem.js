import React, { Component } from 'react';
import '../css/LineItem.css';

class LineItem extends Component {
  static propTypes = {
    description: React.PropTypes.string.isRequired,
    amount: React.PropTypes.string.isRequired,
  };

  //Renders the individual line item, specifically the description text field and the amount field.
  render() {
    return (
      <div className="container">
        <div className="row no-gutters">
          <div className="col-xs-offset-4 col-xs-4">
            <input
              type="text"
              name="description"
              value={this.props.description}
              onChange={event => this.props.updLine(event, this.props.index)}
              placeholder="description of line item"
            />
          </div>
          <div className="col-xs-2">
            <input
              type="number"
              name="amount"
              value={this.props.amount}
              onChange={event => this.props.updLine(event, this.props.index)}
              placeholder="$ 0.00"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LineItem;
