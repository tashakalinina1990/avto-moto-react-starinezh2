import Rating from '../rating/rating';

function Review({ review }) {
  return (
    <article className="review">
      <p className="review__name">{ review.name }</p>
      <dl className="reviews__pros-cons-list">
        <dt className="reviews__pros-cons-define reviews__pros-cons-define--pros">Достоинства</dt>
        <dd className="reviews__pros-cons-describe">{ review.pros }</dd>
        <dt className="reviews__pros-cons-define reviews__pros-cons-define--cons">Недостатки</dt>
        <dd className="reviews__pros-cons-describe">{ review.cons }</dd>
      </dl>
      <p className="review__comment">Комментарий</p>
      <p className="review__body">{ review.body }</p>
      
      
      <div className="review__rating">
        <Rating rating={ review.rating } />

        <span className="review__is-recommend">{ review.isRecommend ? 'Советует' : '' }</span>
      </div>

      <div className="review__reply">
        <span className="review__ago">{ review.date }</span>
        <a className="review__answer" href="!#">Ответить</a>
      </div>
    </article>
  );
}

export default Review;
