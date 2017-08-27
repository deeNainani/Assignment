import React, { Component } from 'react';
import '../css/LineItems.css';
import LineItem from './LineItem';

class LineItems extends Component {
  static propTypes = {
    lineItemList: React.PropTypes.object.isRequired,
    addLineItem: React.PropTypes.func.isRequired,
    updLine: React.PropTypes.func,
  };

  renderLineItem = () => {
    const update = this.props.updLine;
    return this.props.lineItemList.map((lineItem, index) => {
      return (
        <LineItem
          description={lineItem.description}
          amount={lineItem.amount}
          index={index}
          updLine={update}
        />
      );
    });
  };

  render() {
    return (
      <div className="line-items">
        <span className="description"> Description </span>
        <span className="amount"> Amount </span>
        {this.renderLineItem()}
        <button className="add" onClick={this.props.addLineItem}>
          +
        </button>
      </div>
    );
  }
}

export default LineItems;
