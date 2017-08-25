import React, { Component } from 'react';
import logo from '../bn-logo.png';
import '../css/App.css';
import Details from './Details';
import LineItems from './LineItems';
import Total from './Total';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: null,
      Email: null,
      DueDate: null,
      lineItemList: [
        {
          description: null,
          amount: null,
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

  render() {
    console.log(this.state);
    const total = this.calculateTotal();
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Ready to send an invoice</h2>
        </div>
        <Details updDet={this.updateDetails} />
        <LineItems
          lineItemList={this.state.lineItemList}
          addLineItem={this.addLineItem}
          updLine={this.updateLineItem}
        />
        <Total total={total} />
      </div>
    );
  }
}

export default App;
