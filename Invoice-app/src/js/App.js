//importing the required dependency.
import React, { Component } from 'react';
import logo from '../bn-logo.png';
import '../css/App.css';
import Details from './Details';
import LineItems from './LineItems';
import Total from './Total';
import axios from 'axios';

/*
  App component is the main component of the application which internally renders the following components:
  1. Details
  2. LineItems
  3. Total
*/
class App extends Component {
  //Defines the initial state where in all the fields are set to empty string initially
  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      Email: '',
      DueDate: '',
      lineItemList: [
        {
          description: '',
          amount: '',
        },
      ],
    };
  }

  //adds a new line item, when the + button is clicked.
  addLineItem = () => {
    let newlineItemList = this.state.lineItemList;
    newlineItemList.push({ description: null, amount: null });
    this.setState({
      lineItemList: newlineItemList,
    });
  };

  //Updates the state whenever the description and amount for a particular line item are updated.
  updateLineItem = (event, index) => {
    const { name, value } = event.target;
    let newlineItemList = this.state.lineItemList;
    newlineItemList[index][name] = value;
    this.setState({
      lineItemList: newlineItemList,
    });
  };

  //updates the state whenever the name, email or dueDate is updated.
  updateDetails = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  //Calculates the total by iterating through the amount corresponding to each line item
  calculateTotal() {
    const len = this.state.lineItemList.length;
    let count = 0;
    for (let i = 0; i < len; i++) {
      count = count + Number(this.state.lineItemList[i]['amount']);
    }
    return count.toString();
  }

  //does a post call with the latest state that the component comprises off.
  //All the Properties of the state object are set to empty string on successful completion of the post call.
  handleSubmit = info => {
    axios
      .post(this.props.url, info)
      .then(res => {
        this.setState({
          Name: '',
          Email: '',
          DueDate: '',
          lineItemList: [
            {
              description: '',
              amount: '',
            },
          ],
        });
      })
      .catch(err => {
        console.error(err);
      });
  };

  //Renders the main application
  render() {
    console.log(this.state);
    const total = this.calculateTotal();
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Ready to send an invoice</h2>
        </div>
        <Details
          updDet={this.updateDetails}
          name={this.state.Name}
          email={this.state.Email}
          dueDate={this.state.DueDate}
        />
        <LineItems
          lineItemList={this.state.lineItemList}
          addLineItem={this.addLineItem}
          updLine={this.updateLineItem}
        />
        <Total total={total} />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-offset-6 col-sm-6">
              <button
                className="btn btn-primary btn-xl"
                type="button"
                onClick={() => this.handleSubmit(this.state)}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
