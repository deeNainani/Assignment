import React, { Component } from 'react';
import '../css/Details.css';

class Details extends Component {
  static propTypes = {
    updDet: React.PropTypes.func,
    name: React.PropTypes.string,
    email: React.PropTypes.string,
    dueDate: React.PropTypes.string,
  };

  render() {
    return (
      <div className="details">
        <div>
          <label id="name">Name</label>
          <input
            type="text"
            name="Name"
            onChange={event => this.props.updDet(event)}
            placeholder="Jon Snow"
            value={this.props.name}
          />
        </div>
        <div>
          <label id="email">Email </label>
          <input
            type="email"
            name="Email"
            onChange={event => this.props.updDet(event)}
            placeholder="yourName@gmail.com"
            value={this.props.email}
          />
        </div>
        <div>
          <label className="dueDate">Due Date</label>
          <input
            type="date"
            name="DueDate"
            onChange={event => this.props.updDet(event)}
            value={this.props.dueDate}
          />
        </div>
      </div>
    );
  }
}

export default Details;
