import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import ProductStats from './ProductStats.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      fitKeys: ['large', 'true to size', 'small'],
      counter: 0,
      showFilterForm: true,
      sizes: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22],
      busts: ['32AA', '32A', '32B', '32C', '32D', '34AA', '34A', '34B', '34C', '34D', '36AA', '36A', '36B', '36C', '36D', '38AA', '38A', '38B', '38C', '38D'],
      heights: [],
      age: 0,
      avgRating: 0,
    };
    this.getUserData = this.getUserData.bind(this);
    this.renderReviews = this.renderReviews.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.changeSortType = this.changeSortType.bind(this);
    this.sortByDate = this.sortByDate.bind(this);
    this.sortByRating = this.sortByRating.bind(this);
    this.sortByFeatured = this.sortByFeatured.bind(this);
    this.sortByMeasurements = this.sortByMeasurements.bind(this);
    this.getAverageRating = this.getAverageRating.bind(this);
    this.getPercentage = this.getPercentage.bind(this);
    this.setHeights = this.setHeights.bind(this);
    this.getFormattedDate = this.getFormattedDate.bind(this);
    this.getFormattedHeight = this.getFormattedHeight.bind(this);
  }

  componentDidMount() {
    let path = document.location.pathname.split('/')[1];
    this.getUserData(path);
    this.setHeights();
  }

  getUserData(productId) {
    axios.get(`/${productId}/reviews`)
    .then((res) => {
      this.setState({data: this.sortByDate(res.data), avgRating: this.getAverageRating(res.data)});
        console.log(this.state.data);
    })
    .catch((err) => {
      console.log('error', err);
    });
  }

  getFormattedHeight(heightNum) {
    let heights = {
      54: '4\' 6\"',
      55: '4\' 7\"',
      56: '4\' 8\"',
      57: '4\' 9\"',
      58: '4\' 10\"', 
      59: '4\' 11\"',
      60: '5\' 0\"',
      61: '5\' 1\"',
      62: '5\' 2\"',
      63: '5\' 3\"',
      64: '5\' 4\"',
      65: '5\' 5\"',
      66: '5\' 6\"',
      67: '5\' 7\"',
      68: '5\' 8\"',
      69: '5\' 9\"',
      70: '5\' 10\"',
      71: '5\' 11\"',
      72: '6\' 0\"',
      73: '6\' 1\"',
      74: '6\' 2\"',
      75: '6\' 3\"',
      76: '6\' 4\"',
      77: '6\' 5\"',
      78: '6\' 6\"',
    }

    return heights[heightNum];
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

  changeSortType(event) {
    let options = {
      'wlm': 1,
      'featured': 2,
      'newest': 3,
      'rating': 4,
    }

    this.setState({counter: options[event.target.value]}, () => {
      this.renderReviews();
      this.setHeights();
    })
  }

  handleChange(event, inputType) {
    this.sortByMeasurements(event.target.value, inputType);
  }

  sortByMeasurements(userInput, inputType) {
    let data = [].concat(this.state.data);
    let busts = {
      '32AA': 32.1,
      '32A': 32.2,
      '32B': 32.3,
      '32C': 32.4,
      '32D': 32.5,
      '34AA': 34.1,
      '34A': 34.2,
      '34B': 34.3,
      '34C': 34.4,
      '34D': 34.5,
      '36AA': 36.1,
      '36A': 36.2,
      '36B': 36.3,
      '36C': 36.4,
      '36D': 36.5,
      '38AA': 38.1,
      '38A': 38.2,
      '38B': 38.3,
      '38C': 38.4,
      '38D': 38.5,
      null: 0,
    }

    let sorted = data.sort((a, b) => {
      let aa;
      let bb;

      if (inputType === 'bust') {
        aa = busts[a[inputType]];
        bb = busts[b[inputType]];
        return Math.abs(aa - busts[userInput]) - Math.abs(bb - busts[userInput]);
      } else {
        aa = a[inputType];
        bb = b[inputType];
        return Math.abs(aa - userInput) - Math.abs(bb - userInput);
      }

    });

    this.setState({data: sorted});
  }

  sortByDate(data) {
    return data.sort((a, b) => {
      let aa = a.date_posted.slice(0, 10).split('-');
      let bb = b.date_posted.slice(0, 10).split('-');
      return bb[0] - aa[0] || bb[1] - aa[1] || bb[2] - aa[2];
    });
  }

  sortByRating(data) {
    return data.sort((a, b) => {
      let aa = a.date_posted.split('-');
      let bb = b.date_posted.split('-');
      let cc = a.rating;
      let dd = b.rating;

      return dd - cc || bb[0] - aa[0] || bb[1] - aa[1] || bb[2] - aa[2];
    });
  }

  setHeights() {
    let heights = [];

    for (var i = 54; i <=78; i++) {
      heights.push(i);
    }

    this.setState({heights: heights});
  }

  sortByFeatured(data) {
    return data.sort((a, b) => {
      let aa = a.date_posted.split('-');
      let bb = b.date_posted.split('-');
      let cc = a.rating;
      let dd = b.rating;
      let ePhotos = [a.url1, a.url2, a.url3];
      let fPhotos = [b.url1, b.url2, b.url3];
      let ee = [];
      let ff = [];

      for (var i = 0; i < ePhotos.length; i++) {
        if (ePhotos[i]) {
          ee.push(ePhotos[i]);
        }
      }

      for (var j = 0; j < fPhotos.length; j++) {
        if (fPhotos[j]) {
          ff.push(fPhotos[j]);
        }
      }

      return ff.length - ee.length || dd - cc || bb[0] - aa[0] || bb[1] - aa[1] || bb[2] - aa[2];
    });
  }

  renderReviews() {
    let data = [].concat(this.state.data);
    let sorted;

    if (this.state.counter === 0 || this.state.counter === 1 || this.state.counter === 3) {
      sorted = this.sortByDate(data);
    } else if (this.state.counter === 2) {
      sorted = this.sortByFeatured(data);
    } else if (this.state.counter === 4) {
      sorted = this.sortByRating(data);
    }

    if (this.state.counter === 0 || this.state.counter === 1) {
      this.setState({
        showFilterForm: true,
        data: sorted,
      });
    } else {
      this.setState({
        showFilterForm: false,
        data: sorted,
      });
    }
  }

  getAverageRating(data) {
    let sum = 0;

    for (var i = 0; i < data.length; i++) {
      sum += data[i].rating;
    }

    let avg = Math.round((sum / data.length));
    return avg;
  }

  getPercentage(keyword) {
    let data = [].concat(this.state.data);
    let count = 0;

    for (var i = 0; i < data.length; i++) {
      if (data[i].fit === keyword) {
        count++;
      }
    }

    let percentage = count > 0 ? Math.round(count / data.length * 100) : 0;
    return percentage;
  }

  render() {
    return (
      <div className="reviews-partial">
          <ProductStats
            fitKeys={this.state.fitKeys}
            count={this.state.data.length}
            avg={this.state.avgRating}
            getPercentage={this.getPercentage}
          />
          <ReviewList
            reviews={this.state.data}
            changeSortType={this.changeSortType}
            getDate={this.getFormattedDate}
            getHeight = {this.getFormattedHeight}
            showFilterForm={this.state.showFilterForm}
            sizes={this.state.sizes}
            heights={this.state.heights}
            busts={this.state.busts}
            handleChange={this.handleChange}
          />
      </div>
    );
  }
};

export default App;
