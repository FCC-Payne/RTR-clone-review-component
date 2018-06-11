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
        <ProductStats fitKeys={this.state.fitKeys}/>
        <ReviewList reviews={this.state.data}/>
      </div>
    );
  }
};

export default App;
