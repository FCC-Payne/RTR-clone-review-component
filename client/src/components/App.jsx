import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dress: 1,
    }
    this.getUserData = this.getUserData.bind(this)
  }

  componentDidMount() {
    this.getUserData();
  }

  getUserData() {
    axios.get(`/reviews/${this.state.dress}`)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    });
  }

  render() {
    return (
      <div>
        <ReviewList />
      </div>
    );
  }
};

export default App;