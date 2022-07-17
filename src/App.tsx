import * as React from 'react';
import './style.css';
import { useState, useEffect } from 'react';
import Buttons from './components/Buttons';
import Card from './components/Card';

import generator from './utils/generate';
import shuffle from './utils/shuffle';

export default function App() {

  const [selected, setSelected] = useState<any>(null);
  const [cards, setCards] = useState<Object[]>([]);

  useEffect(() => {
    const generatedCards = shuffle(generator());
    setCards(generatedCards);
  }, []);

  function shuffler(event: Event) {
    const shuffled = shuffle(cards);
    setCards(shuffled);
    console.log(cards);
  }

  function reset(event: Event) {
    console.log("Reset called");
    const resetList = shuffle(generator());
    setCards(resetList);
    setSelected(null);
  }

  function drawCard(event: Event) {
    const firstCard = cards.at(0);
    setCards(cards.slice(1));
    setSelected(firstCard);
  }

  return (
    <div>
      <Buttons shuffler={shuffler} draw={drawCard} reset={reset} cardsremaninig={cards.length} />
      <h5 data-testid="remaining-cards">Remaining cards in the deck: {cards.length}</h5>
      {selected === null ? <p>Please draw a card!</p> : <p></p>}
      {selected != null ? <Card selected={selected} /> : null}
    </div>
  );
}
