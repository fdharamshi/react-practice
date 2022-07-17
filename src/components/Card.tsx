import * as React from 'react';
// import Suits from '../utils/suitsenum';
import clubs from '../images/clubs.png';
import diamonds from '../images/diamond.png';
import spades from '../images/spade.png';
import hearts from '../images/heart.png';

export default function Card(props: any) {

  let valueStr: string = "";
  if (props.selected != null) {
    switch (props.selected.value) {
      case 1: valueStr = "A"; break;
      case 11: valueStr = "J"; break;
      case 12: valueStr = "Q"; break;
      case 13: valueStr = "K"; break;
      default: valueStr = `${props.selected.value}`
    }
  }

  return (
    props.selected != null ? <div className="card-wrapper" data-testid="card-wrapper">
      <div className="pokercard" data-testid="card">
        <img data-testid="card-suit"
          src={props.selected.suit === "diamond" ? diamonds : (props.selected.suit === "club" ? clubs : (props.selected.suit === "spade" ? spades : hearts))}
          alt={props.selected.suit === "diamond" ? diamonds : (props.selected.suit === "club" ? "club" : (props.selected.suit === "spade" ? "spade" : "heart"))}
        />
        <h1 data-testid="card-value">{valueStr}</h1>
      </div>
    </div> : <div></div>

  );
}
