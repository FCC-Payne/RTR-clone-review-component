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

    };
    this.getUserData = this.getUserData.bind(this);
    this.getFormattedDate = this.getFormattedDate.bind(this);
    this.renderReviews = this.renderReviews.bind(this);
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


  getFormattedDate(date) {
    let formattedDate = new Date(date);
    let day = formattedDate.getDate();
    let month = formattedDate.getMonth();
    let year = formattedDate.getFullYear();

    let months = {
      0: 'January',
      1: 'February',
      2: 'March',
      3: 'April',
      4: 'May',
      5: 'June',
      6: 'July',
      7: 'August',
      8: 'September',
      9: 'October',
      10: 'November',
      11: 'December',
    };

    month = months[month];

    return `${month} ${day}, ${year}`;
  }

  onSelect(event) {
    let options = {
      'wlm': 1,
      'featured': 2,
      'newest': 3,
      'rating': 4,
    }

    this.setState({counter: options[event.target.value]})
  }

  renderReviews() {
    let data = [].concat(this.state.data)
    if (this.state.counter === 0 || this.state.counter === 3) {
      // data.sort
    }

    return data;
  }

  render() {
    return (
      <div className="reviews-component">
        <ProductStats fitKeys={this.state.fitKeys} count={this.state.data.length}/>
        <ReviewList reviews={this.state.data} getDate={this.getFormattedDate}/>
      </div>
    );
  }
};

export default App;
