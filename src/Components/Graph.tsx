import { height, width } from '../config';

/*
  TODO
  + Mappa över array av nummer
  + Visa varför det inte skalerar
  + scaleLinear
  + Ändra arrayen så att den har label.
  + scaleBand + accessor
  + timeScale
  + <LinePath>
  + Curves
  --- om det finns tid

*/

export default function Graph() {
  return (
    <svg height={height} width={width} xmlns="http://www.w3.org/2000/svg">
      {/* <rect x="0" width="50" height="150" y="50" rx="5" /> */}
    </svg>
  );
}
