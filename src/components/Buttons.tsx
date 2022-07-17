import * as React from 'react';

export default function Buttons(props: any) {
  return (
    <div>
      <button onClick={props.shuffler} disabled={props.cardsremaninig > 0 ? false : true} data-testid="btn-shuffle">Shuffle</button>
      <button onClick={props.draw} disabled={props.cardsremaninig > 0 ? false : true} data-testid="btn-draw">Draw Card</button>
      <button onClick={props.reset} data-testid="btn-reset">Reset</button>
    </div>
  );
}
