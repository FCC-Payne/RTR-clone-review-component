import React from 'React';
import PhotoCarousel from './PhotoCarousel.jsx';

const ProductStats = (props) => (
  <div className="reviews-header">
    <div className="reviews-summary-content">
      <div>
        <h2 className="review-count">3 reviews</h2>
        <div>average rating: 4/5 stars</div>
      </div>
      <div className="reviews-header_fit-photo">
        <div className="reviews-header_fit-summary">
          <div className="header-font">Fit</div>
          <div>
            <table className="fit-summary">
              <tr className="fit-summary_row">
                <td className="fit-summary_label label">large</td>
                <td className="fit-summary_bar">
                  <div className="fit-summary_bar-background">
                    <div className="fit-summary_bar-highlight"></div>
                  </div>
                </td>
                <td className="fit-summary_count label">(0)</td>
              </tr>
              <tr className="fit-summary_row">
                <td className="fit-summary_label label">true to size</td>
                <td className="fit-summary_bar">
                  <div className="fit-summary_bar-background">
                    <div className="fit-summary_bar-highlight"></div>
                  </div>
                </td>
                <td className="fit-summary_count label">(0)</td>
              </tr>
              <tr className="fit-summary_row">
                <td className="fit-summary_label label">small</td>
                <td className="fit-summary_bar">
                  <div className="fit-summary_bar-background">
                    <div className="fit-summary_bar-highlight"></div>
                  </div>
                </td>
                <td className="fit-summary_count label">(0)</td>
              </tr>
            </table>
          </div>
        </div>
        <div>
          Photo Carousel
        </div>
      </div>
    </div>
  </div>
);

export default ProductStats;