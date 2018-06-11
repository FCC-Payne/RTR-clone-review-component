import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import ProductStats from './ProductStats.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dress: 1,
      data: [],
      fitKeys: ['large', 'true to size', 'small'],
      counter: 0,
      showFilterForm: true,

    };
    this.getUserData = this.getUserData.bind(this);
    this.renderReviews = this.renderReviews.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  componentDidMount() {
    this.getUserData();
  }

  getUserData() {
    axios.get('/reviews/1')
    .then((res) => {
      this.setState({data: res.data});
      console.log(this.state.data);
    })
    .catch((err) => {
      console.log('error', err);
    });
  }

  handleOptionChange(event) {
    let options = {
      'wlm': 1,
      'featured': 2,
      'newest': 3,
      'rating': 4,
    }

    this.setState({counter: options[event.target.value]}, this.renderReviews);
  }

  renderReviews() {
    let data = [].concat(this.state.data)

    // sort types
    if (this.state.counter === 0 || this.state.counter === 3) {
      data.sort((a, b) => a.date_posted < b.date_posted);
    } else if (this.state.counter === 1) {
      // sort by closest measurement: if I request 5-11 height, I want
    } else if (this.state.counter === 2) {
      // sort by if there are user photos, then rating, then date
    } else if (this.state.counter === 4) {
      // sort by highest rating, then by date
    }

    if (this.state.counter === 0 || this.state.counter === 1) {
      this.setState({showFilterForm: true});
    } else {
      this.setState({showFilterForm: false});
    }
  }

  render() {
    return (
      <div className="reviews-component">
        <ProductStats fitKeys={this.state.fitKeys}/>
        <ReviewList
          reviews={this.state.data}
          handleOptionChange={this.handleOptionChange}
          showFilterForm={this.state.showFilterForm}
        />
      </div>
    );
  }
};

export default App;
