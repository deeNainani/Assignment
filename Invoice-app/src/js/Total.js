import React, { Component } from 'react';
import '../css/Total.css';

class Total extends Component {
  static propTypes = {
    total: React.PropTypes.string,
  };

  //Renders the Total read only field which displays the total corresponding to the line items.
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
