import axios from 'axios';
import { useEffect, useState } from 'react';
import RandomQuote from './components/RandomQuote';
import QuotesAuthor from './components/QuotesAuthor';

const App = () => {
  // Quotes state
  const [quoteData, setQuoteData] = useState(null);
  const [quotesByAuthor, setQuotesByAuthor] = useState(null);

  // Get random quote
  const getRandomQuote = async () => {
    await axios
      .get('https://quote-garden.herokuapp.com/api/v3/quotes/random')
      .then((res) => {
        const randomQuote = res.data.data[0];
        setQuoteData(randomQuote);
      })
      .catch((err) => {
        console.log(err);
      });
    setQuotesByAuthor(null);
  };

  // Get all quotes by author
  const getQuotesByAuthor = () => {
    axios
      .get('https://quote-garden.herokuapp.com/api/v3/quotes', {
        params: {
          author: quoteData.quoteAuthor,
        },
      })
      .then((res) => {
        const quotesAuthor = res.data.data;
        console.log(res);
        setQuotesByAuthor(quotesAuthor);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Displaying quotes data to the component
  const displayQuotes = () => {
    if (quotesByAuthor)
      return (
        <div>
          <div className="quote-author-name">
            <h1>{quoteData.quoteAuthor}</h1>
          </div>
          <QuotesAuthor quotesByAuthor={quotesByAuthor} />
        </div>
      );
    if (quoteData)
      return (
        <RandomQuote
          quoteData={quoteData}
          getQuotesByAuthor={getQuotesByAuthor}
        />
      );
  };

  useEffect(() => {
    if (!quoteData) {
      getRandomQuote();
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <button
          className="btn-call-random-quote"
          type="button"
          onClick={getRandomQuote}
        >
          {`random `}
          <i className="material-icons-round">autorenew</i>
        </button>
      </header>
      <main className="App-main">{displayQuotes()}</main>
      <footer className="App-footer">
        <small className="copyright">
          {`created by `}
          <b>
            <a
              href="https://github.com/gitraya"
              target="_blank"
              rel="noreferrer"
            >
              gitraya
            </a>
          </b>
          {`- devChallenges.io`}
        </small>
      </footer>
    </div>
  );
};

export default App;
