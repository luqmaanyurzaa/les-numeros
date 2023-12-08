import React from "react";
import Entry from "./Entry";

let french_numbers = [
    'Zero', 'Un', 'Deux', 'Trois', 'Quatre', 'Cinq', 'Six', 'Sept', 'Huit', 'Neuf', 'Dix',
    'Onze', 'Douze', 'Treize', 'Quatorze', 'Quinze', 'Seize', 'Dix-sept', 'Dix-huit', 'Dix-neuf', 'Vingt',
    'Vingt et un', 'Vingt-deux', 'Vingt-trois', 'Vingt-quatre', 'Vingt-cinq', 'Vingt-six', 'Vingt-sept', 'Vingt-huit', 'Vingt-neuf', 'Trente',
    'Trente et un', 'Trente-deux', 'Trente-trois', 'Trente-quatre', 'Trente-cinq', 'Trente-six', 'Trente-sept', 'Trente-huit', 'Trente-neuf', 'Quarante',
    'Quarante et un', 'Quarante-deux', 'Quarante-trois', 'Quarante-quatre', 'Quarante-cinq', 'Quarante-six', 'Quarante-sept', 'Quarante-huit', 'Quarante-neuf', 'Cinquante',
    'Cinquante et un', 'Cinquante-deux', 'Cinquante-trois', 'Cinquante-quatre', 'Cinquante-cinq', 'Cinquante-six', 'Cinquante-sept', 'Cinquante-huit', 'Cinquante-neuf', 'Soixante',
    'Soixante et un', 'Soixante-deux', 'Soixante-trois', 'Soixante-quatre', 'Soixante-cinq', 'Soixante-six', 'Soixante-sept', 'Soixante-huit', 'Soixante-neuf', 'Soixante-dix',
    'Soixante et onze', 'Soixante-douze', 'Soixante-treize', 'Soixante-quatorze', 'Soixante-quinze', 'Soixante-seize', 'Soixante-dix-sept', 'Soixante-dix-huit', 'Soixante-dix-neuf', 'Quatre-vingts',
    'Quatre-vingt-un', 'Quatre-vingt-deux', 'Quatre-vingt-trois', 'Quatre-vingt-quatre', 'Quatre-vingt-cinq', 'Quatre-vingt-six', 'Quatre-vingt-sept', 'Quatre-vingt-huit', 'Quatre-vingt-neuf', 'Quatre-vingt-dix',
    'Quatre-vingt-onze', 'Quatre-vingt-douze', 'Quatre-vingt-treize', 'Quatre-vingt-quatorze', 'Quatre-vingt-quinze', 'Quatre-vingt-seize', 'Quatre-vingt-dix-sept', 'Quatre-vingt-dix-huit', 'Quatre-vingt-dix-neuf', 'Cent'
  ]

let len = french_numbers.length;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const integer = Math.floor(Math.random() * (max - min) + min);
  console.log(integer);
  return integer
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: getRandomInt(0, len),
      frenchNumber: "",
      score: 0
    };
  }

  handleCorrectInput = () => {
    let newIndex;
    do {
      newIndex = getRandomInt(0, len);
    } while (newIndex === this.state.index);

    this.setState({
      index: newIndex,
      frenchNumber: french_numbers[newIndex],
      score: this.state.score + 1
    });
    console.log("Score: " + this.state.score);

  };

  render() {

    return (
      <div className="container">
        <div className="game">
          <h2 className="number" id={this.state.frenchNumber} number={this.state.frenchNumber} digit={this.state.index}>
            {french_numbers[this.state.index]}
          </h2>
        </div>
        <div className="entry">
          <Entry numberToMatch={this.state.index} onCorrectInput={this.handleCorrectInput} />
        </div>
        <div className="score">
          <h2>Score: {this.state.score}</h2>
        </div>
      </div>
    );
  }
}

export default Game;
