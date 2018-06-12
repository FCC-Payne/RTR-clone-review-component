import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReviewList from './ReviewList.jsx';
import ProductStats from './ProductStats.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dress: 21,
      data: [],
      fitKeys: ['large', 'true to size', 'small'],
      counter: 0,
      showFilterForm: true,
      sizes: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22],
      heights: ['4-6', '4-7', '4-8', '4-9', '4-10', '4-11', '5-1', '5-2', '5-3', '5-4', '5-5', '5-6', '5-7', '5-8', '5-9', '5-10', '5-11', '6-1', '6-2', '6-3', '6-4', '6-5', '6-6'],
      busts: ['32AA', '32A', '32B', '32C', '32D', '34AA', '34A', '34B', '34C', '34D', '36AA', '36A', '36B', '36C', '36D', '38AA', '38A', '38B', '38C', '38D'],
      age: 0,
    };
    this.getUserData = this.getUserData.bind(this);
    this.getFormattedDate = this.getFormattedDate.bind(this);
    this.renderReviews = this.renderReviews.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.sortByDate = this.sortByDate.bind(this);
    this.sortByRating = this.sortByRating.bind(this);
    this.sortByFeatured = this.sortByFeatured.bind(this);
    this.sortByMeasurements = this.sortByMeasurements.bind(this);
  }

  componentDidMount() {
    this.getUserData();
  }

  getUserData() {
    axios.get('/reviews/21')
    .then((res) => {
      this.setState({data: this.sortByDate(res.data)});
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

  handleOptionChange(event) {
    let options = {
      'wlm': 1,
      'featured': 2,
      'newest': 3,
      'rating': 4,
    }

    this.setState({counter: options[event.target.value]}, this.renderReviews);
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

  sortByMeasurements(data, input) {
    return data.sort((a, b) => {
      return Math.abs(a - input) - Math.abs(b - input);
    });
  }

  renderReviews() {
    let data = [].concat(this.state.data);
    let sorted;

    if (this.state.counter === 0 || this.state.counter === 3) {
      sorted = this.sortByDate(data);
    } else if (this.state.counter === 1) {
      // sorted = this.sortByMeasurements(data);
    } else if (this.state.counter === 2) {
      sorted = this.sortByFeatured(data);
    } else if (this.state.counter === 4) {
      sorted = this.sortByRating(data);
    }

    if (this.state.counter === 0 || this.state.counter === 1) {
      this.setState({showFilterForm: true}, this.setState({data: sorted}));
    } else {
      this.setState({showFilterForm: false}, this.setState({data: sorted}));
    }
  }

  render() {
    return (
      <div className="reviews-component">
        <ProductStats fitKeys={this.state.fitKeys}/>
        <ReviewList
          reviews={this.state.data}
          handleOptionChange={this.handleOptionChange}
          getDate={this.getFormattedDate}
          showFilterForm={this.state.showFilterForm}
          sizes={this.state.sizes}
          heights={this.state.heights}
          busts={this.state.busts}
        />
      </div>
    );
  }
};

export default App;
