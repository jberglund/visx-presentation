/*

Recap så långt! Vi har lärt oss:
* Göra en SVG och lägga till en rect.
* Använda oss av skalor, både linjär och band (aka. kategori)

  LABELS!

*/

// paths

import { scaleLinear, scaleTime } from '@visx/scale';

import { getMinMax } from '../helpers';
import { width, height, employees, Employee } from '../config';

const getValue = (i: Employee) => i.name;
const getDate = (i: Employee) => i.date.getTime();

const paddingTop = 10;

const [minX, maxX] = getMinMax(employees.map(getDate));
//const [minY, maxY] = getMinMax(data.map(getValue));

type ByYear = {
  ['year']: {
    ['month']: [Employee]
  }
}
console.log(employees.reduce((acc, curr) => {
  const year = curr.date.getFullYear();
  const month = curr.date.getMonth();

  const lol = acc[year][month];
  return {
    ...acc,
    [year]: {
      [month]: [curr]
    }
  }
}, {}));

export default function Bars() {
  const xScale = scaleTime({
    range: [0, width],
    domain: [minX, maxX],
    round: true,
  });

  return (
    <svg height={height} width={width} xmlns="http://www.w3.org/2000/svg">
      {employees.map((i) => (
        <circle
          cx={xScale(getDate(i))}
          cy={height / 2}
          r="5"
          fill="currentColor"
        />
      ))}
    </svg>
  );
}

/* cheat codes


  NBNBNB! Vi ser bara markern utanför nu för att vi har overflow: visible på.
*/
