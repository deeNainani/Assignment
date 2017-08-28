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
        <div className="container">
          <div className="row">
            <div className="col-xs-offset-3 col-xs-3">Description</div>
            <div className="col-xs-6">Amount</div>
          </div>
          {this.renderLineItem()}
          <div className="row">
            <div className="col-sm-offset-2 col-sm-5">
              <button
                className="btn btn-primary btn-xs"
                type="button"
                onClick={this.props.addLineItem}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LineItems;
