//import logo from './logo.svg';
import './App.css';
import Entry from './entry';
import {useState} from 'react';

// list of spelled french numbers
let french_numbers = [
  'Un', 'Deux', 'Trois', 'Quatre', 'Cinq', 'Six', 'Sept', 'Huit', 'Neuf', 'Dix',
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

//list of numbers as integers
const numbers = Array.from({ length: 100 }, (_, index) => index + 1);
let len = numbers.length;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function App() {
  const [index, setIndex] = useState(getRandomInt(0, len));
  const [frenchNumber, setFrenchNumber] = useState(french_numbers[index]);

  const handleCorrectInput = () => {
    // Generate a new random index different from the current one
    let newIndex;
    do {
      newIndex = getRandomInt(0, len);
    } while (newIndex === index);

    // Update the state with the new index and corresponding French number
    setIndex(newIndex);
    setFrenchNumber(french_numbers[newIndex]);
  };

  return (
    <div className="container">
      <div className="Number">
        <h2 className="number" id={frenchNumber} number={frenchNumber} digit={numbers[index]}>
          {french_numbers[index]}
        </h2>
      </div>
      <div className="Entry">
        <Entry numberToMatch={numbers[index]} onCorrectInput={handleCorrectInput} />
      </div>
    </div>
  );
}


export default App;