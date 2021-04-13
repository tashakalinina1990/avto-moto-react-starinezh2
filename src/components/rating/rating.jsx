function Rating({ rating }) {

  rating--;

  return (
    <>
      {
        Array(5).fill(0).map((item, index) => 
          <svg
            className="review__star"
            key={ index }
            width="17"
            height="17"
            viewBox="0 0 27 25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill={ rating < index ? '#D1D2D5' : '#D12136' }
              d="M13.5688 0L16.6151 9.52282H26.4734L18.4979 15.4082L21.5443 24.9311L13.5688 19.0456L5.59324 24.9311L8.63961 15.4082L0.664102 9.52282H10.5224L13.5688 0Z"
            />
          </svg>
        )
      }
    </>
  );
}

export default Rating;
