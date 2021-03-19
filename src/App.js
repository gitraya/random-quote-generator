import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [quoteData, setQuoteData] = useState(null);
  const getQuote = () => {
    axios
      .get('https://quote-garden.herokuapp.com/api/v3/quotes/random')
      .then((res) => {
        const quoteDataAxios = res.data.data[0];
        setQuoteData(quoteDataAxios);
        console.log(res);
        console.log(quoteData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (!quoteData) {
      getQuote();
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <button className="btn-call-random-quote">
          {`random ${(<i class="material-icons-round">autorenew</i>)}`}
        </button>
      </header>
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
}

export default App;
