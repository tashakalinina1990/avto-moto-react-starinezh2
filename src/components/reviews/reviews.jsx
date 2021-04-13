import { connect } from 'react-redux';

import { setModalVisible } from '../../store/actions.js';
import { getReviews } from '../../store/selectors.js';

import Review from '../review/review';

function Reviews({ reviews, setModalVisible }) {

  const handleAddReviewClick = () => {
    setModalVisible(true);
  };

  return (
    <section className="reviews">
      <h3 className="visually-hidden">Отзывы</h3>

      <button
        className="reviews__add-review"
        onClick={ () => handleAddReviewClick() }
      >Оставить отзыв</button>

      {
        reviews.map((review, index) => <Review review={ review } key={ `review${ index }` } />)
      }
      
    </section>
  );
}

const mapStateToProps = (state) => ({
  reviews: getReviews(state),
});

const mapDispatchToProps = {
  setModalVisible,
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);

