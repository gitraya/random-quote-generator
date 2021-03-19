const RandomQuote = ({ quoteData, getQuotesByAuthor }) => {
  return (
    <div className="random-quote-container">
      <div className="wrap-random-text">
        <blockquote className="random-quote-text">
          <q>{quoteData.quoteText}</q>
        </blockquote>
      </div>
      <div className="wrap-random-author">
        <button
          type="button"
          className="btn-call-quotes"
          onClick={getQuotesByAuthor}
        >
          <div className="random-quote-author">
            <h1>{quoteData.quoteAuthor}</h1>
            <h2>{quoteData.quoteGenre}</h2>
          </div>
          <i class="material-icons-round arrow">arrow_right_alt</i>
        </button>
      </div>
    </div>
  );
};

export default RandomQuote;
