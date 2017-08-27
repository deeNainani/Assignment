import React, { Component } from 'react';
import logo from '../bn-logo.png';
import '../css/App.css';
import Details from './Details';
import LineItems from './LineItems';
import Total from './Total';
import axios from 'axios';

class App extends Component {
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

  addLineItem = () => {
    let newlineItemList = this.state.lineItemList;
    newlineItemList.push({ description: null, amount: null });
    this.setState({
      lineItemList: newlineItemList,
    });
  };

  updateLineItem = (event, index) => {
    const { name, value } = event.target;
    let newlineItemList = this.state.lineItemList;
    newlineItemList[index][name] = value;
    this.setState({
      lineItemList: newlineItemList,
    });
  };

  updateDetails = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  calculateTotal() {
    const len = this.state.lineItemList.length;
    let count = 0;
    for (let i = 0; i < len; i++) {
      count = count + Number(this.state.lineItemList[i]['amount']);
    }
    return count.toString();
  }

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
        <button id="send" onClick={() => this.handleSubmit(this.state)}>
          Send
        </button>
      </div>
    );
  }
}

export default App;
