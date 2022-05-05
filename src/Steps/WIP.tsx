/*

Recap så långt! Vi har lärt oss:
* Göra en SVG och lägga till en rect.
* Använda oss av skalor, både linjär och band (aka. kategori)

  LABELS!

*/

import { scaleTime } from '@visx/scale';

import { getMinMax } from '../helpers';
import { width, height, employees, Employee } from '../config';


const getDate = (i: Employee) => i.date.getTime();

const [minX, maxX] = getMinMax(employees.map(getDate));

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
