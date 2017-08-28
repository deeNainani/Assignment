import React, { Component } from 'react';
import '../css/Total.css';

class Total extends Component {
  static propTypes = {
    total: React.PropTypes.string,
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-offset-6 col-sm-6">
            <div className="total">
              TOTAL $ {this.props.total}{' '}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Total;
