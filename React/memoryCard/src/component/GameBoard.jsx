import "./GameBoard.css";
import Card from "./Card.jsx";
import { useState } from "react";
import { Fragment } from "react";
import { useEffect } from "react";
import { getImage, pokemonList } from "./GetImages.jsx";
let initialCards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let URLs = [];
let Names = [];
function Cards({ setMaxScore, score, setScore, maxScore }) {
  let [alreadyselected, setAlreadyselected] = useState([]);
  let [newGame, setNewGame] = useState(0);
  let [imageLoaded, setImageLoaded] = useState(0);
  //   获取图片逻辑
  useEffect(() => {
    let ignore = false;
    setImageLoaded(0);
    Names = [];
    URLs = [];
    let promiseList = [];
    initialCards.map(() => {
      while (true) {
        let randomIndex = Math.floor(Math.random() * pokemonList.length);
        if (!Names.includes(pokemonList[randomIndex])) {
          Names.push(pokemonList[randomIndex]);
          promiseList.push(getImage(randomIndex));
          break;
        }
      }
    });
    Promise.all(promiseList)
     .then((images) => {
        if(!ignore){
            URLs = images;
            setImageLoaded(images.length);
            console.log(URLs);
            console.log(Names);
        }
     })

    return ()=>{
        ignore = true;
    }
  }, [newGame]);

  let shuffledCards = initialCards.sort((a, b) => {
    return Math.random() - 0.5;
  });
  if (score == initialCards.length) {
    return (
      <Fragment>
        <h1>Game Over!</h1>
        <h1>Congratulations! You have won the game!</h1>
        <button
          onClick={() => {
            setScore(0);
            setNewGame(newGame + 1);
            setAlreadyselected([]);
          }}
        >
          Play Again
        </button>
      </Fragment>
    );
  }
  function handleClick(id) {
    if (alreadyselected.includes(id)) {
      setScore(0);
      setAlreadyselected([]);
    } else {
      setScore(score + 1);
      if (score + 1 > maxScore) setMaxScore(score + 1);
      setAlreadyselected([...alreadyselected, id]);
    }
  }
  if (imageLoaded != initialCards.length) {
    return <h1>Loading...</h1>;
  } else
    return (
      <div className="card-container">
        {shuffledCards.map((card) => {
          return (
            <Card
              id={card}
              key={card}
              onClick={() => handleClick(card)}
              url={URLs[card]}
              name={Names[card]}
            ></Card>
          );
        })}
      </div>
    );
}
export function GameBoard() {
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  return (
    <>
      <h1>score: {score}</h1>
      <h1>max score: {maxScore}</h1>
      <Cards
        score={score}
        setScore={setScore}
        maxScore={maxScore}
        setMaxScore={setMaxScore}
      />
    </>
  );
}
