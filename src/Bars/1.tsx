import { height, width } from '../config';

/* 
  Todo:
    - rect
    - const bars = [50, 70, 89, 56];
*/

export default function Bars() {
  return (
    <svg height={height} width={width} xmlns="http://www.w3.org/2000/svg">
      <rect x="0" width="50" height="150" y="50" rx="5" />
    </svg>
  );
}

/*
  Recap:
  Problem är att det skalerar inte så bra:
  När våra värden går utanför höjd/bredd slutar det fungera.
  För många bars skapar också problem.
  x är inte centrerat.

  <rect x="0" width="50" height="50" y="50" rx="5" />
*/
