import React, { useState } from 'react';
import Emoji from './components/Emoji/Emoji';
import Card from './components/Card/Card';
import Button from './components/Button/Button';
import Store from './components/Card/imgArr';

import './App.css';

function App() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [counter, setCounter] = useState(0);

  const changeLikes = () => {
    setLikes(likes + 1);
    setCounter(counter + 1);
  };
  const changeDislikes = () => {
    setDislikes(dislikes + 1);
    setCounter(counter + 1);
  };
  const returningMessage = () => {
    let message = '';
    if (likes > dislikes) message = 'We like your style!';
    else if (likes < dislikes) message = 'Boooo!!!';
    else message = 'Not bad at all';

    return message;
  };
  const resetParams = () => {
    setLikes(0);
    setDislikes(0);
    setCounter(0);
  };

  return (
    <div>
      {Store.length <= counter ? (
        <div className="container">
          {' '}
          {returningMessage()}
          <button onClick={resetParams}>reset</button>
        </div>
      ) : (
        <div className="container">
          <div className="count-container">
            <Emoji
              count={likes}
              img="https://listimg.pinclipart.com/picdir/s/143-1437809_hand-emoji-clipart-transparent-background-prima-bread-maker.png"
            />
            <Emoji
              count={dislikes}
              img="https://thumbs.dreamstime.com/b/cartoon-dislike-emoticon-illustration-78174050.jpg"
            />
          </div>
          <Card className="card-container" imgIndex={counter} />
          <div className="button-container">
            <Button handleClick={changeLikes} name="like" />
            <Button handleClick={changeDislikes} name="dislike" />
          </div>
        </div>
      )}
    </div>
  );
}
// ReactDOM.render(<App />, document.querySelector('#root'));

export default App;
