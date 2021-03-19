const QuotesAuthor = ({ quotesByAuthor }) => {
  // Looping over quotes
  const mappingQuotes = quotesByAuthor.map((quote) => {
    return (
      <div key={quote._id} className="wrap-random-text author">
        <blockquote className="random-quote-text">
          <q>{quote.quoteText}</q>
        </blockquote>
      </div>
    );
  });

  return <div className="random-quote-container author">{mappingQuotes}</div>;
};

export default QuotesAuthor;
