import React, { Component } from 'react';
import '../css/Details.css';

class Details extends Component {
  static propTypes = {
    updDet: React.PropTypes.func,
  };

  render() {
    return (
      <div>
        <form>
          <table className="Details">
            <tr>
              <td>Name </td>
              <td>
                {' '}<input
                  type="text"
                  name="Name"
                  onChange={event => this.props.updDet(event)}
                />{' '}
              </td>
            </tr>
            <tr>
              <td>Email </td>
              <td>
                {' '}<input
                  type="email"
                  name="Email"
                  onChange={event => this.props.updDet(event)}
                />{' '}
              </td>
            </tr>
            <tr>
              <td>Due date </td>
              <td>
                <input
                  type="date"
                  name="DueDate"
                  onChange={event => this.props.updDet(event)}
                />{' '}
              </td>
            </tr>
          </table>
        </form>
      </div>
    );
  }
}

export default Details;
