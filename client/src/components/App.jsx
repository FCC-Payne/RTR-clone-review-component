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
      data: []
    }
    this.getUserData = this.getUserData.bind(this)
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
      console.log('error', err)
    });
  }

  render() {
    return (
      <div className="reviews-component">
        <ProductStats />
        <ReviewList reviews={this.state.data}/>
      </div>
    );
  }
};

export default App;