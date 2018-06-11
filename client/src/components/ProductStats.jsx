import React from 'React';
import PhotoCarousel from './PhotoCarousel.jsx';

const ProductStats = (props) => (
  <div className="reviews-header">
    <div className="reviews-summary-content">
      <div>
        <h2 className="review-count">{props.count} reviews</h2>
        <div>average rating: 4/5 stars</div>
      </div>
      <div className="reviews-header_fit-photo">
        <div className="reviews-header_fit-summary">
          <div className="header-font">Fit</div>
          <div>
            <table className="fit-summary">
              <tbody>
              {
                props.fitKeys.map((fitKey) => (
                  <tr className="fit-summary_row">
                    <td className="fit-summary_label label">{fitKey}</td>
                    <td className="fit-summary_bar">
                      <div className="fit-summary_bar-background">
                        <div className="fit-summary_bar-highlight"></div>
                      </div>
                    </td>
                    <td className="fit-summary_count label">(0)</td>
                  </tr>
                ))
              }
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <PhotoCarousel />
        </div>
      </div>
    </div>
  </div>
);

export default ProductStats;
