// paths

import { scaleLinear, scaleTime } from '@visx/scale';
import { LinePath } from '@visx/shape';

import { getMinMax } from '../helpers';
import { width, height } from '../config';

type Data = {
  value: number;
  date: Date;
};

const data: Data[] = [
  { value: 160, date: new Date('2022-04-01') },
  { value: 176, date: new Date('2022-04-02') },
  { value: 220, date: new Date('2022-04-03') },
  { value: 155, date: new Date('2022-04-04') },
  { value: 321, date: new Date('2022-04-05') },
  { value: 245, date: new Date('2022-04-06') },
  { value: 222, date: new Date('2022-04-07') },
];

const getValue = (i: Data) => i.value;
const getDate = (i: Data) => i.date.getTime();

const paddingTop = 10;

const [minX, maxX] = getMinMax(data.map(getDate));
const [minY, maxY] = getMinMax(data.map(getValue));

export default function Bars() {
  const yScale = scaleLinear({
    range: [paddingTop, height - paddingTop],
    domain: [minY, maxY],
    nice: true,
  });

  const xScale = scaleTime({
    range: [0, width],
    domain: [minX, maxX],
    round: true,
  });

  return (
    <svg height={height} width={width} xmlns="http://www.w3.org/2000/svg">
      <LinePath
        data={data}
        x={(d) => xScale(getDate(d)) ?? 0}
        y={(d) => yScale(getValue(d)) ?? 0}
        stroke="black"
        strokeWidth="2"
      />
      {data.map((i) => (
        <circle
          cx={xScale(getDate(i))}
          cy={yScale(getValue(i))}
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
