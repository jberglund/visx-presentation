import { scaleLinear, scaleTime } from '@visx/scale';
import { LinePath } from '@visx/shape';
import { curveNatural } from '@visx/curve';
import Circle from '@visx/shape/lib/shapes/Circle';
import { Grid } from '@visx/grid';
import { getMinMax } from '../helpers';
import { width, height } from '../config';
import { AxisBottom } from '@visx/axis';
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

// paths

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
      <Grid
        xScale={xScale}
        yScale={yScale}
        width={width}
        height={height}
        numTicksRows={0}
        numTicksColumns={10}
        strokeOpacity={0.1}
      />
      <AxisBottom
          top={height}
          scale={xScale}
          tickLabelProps={() => ({
            fill: 'red',
            fontSize: 11,
            textAnchor: 'middle',
          })}
        />

      <LinePath
        data={data}
        x={(d) => xScale(getDate(d)) ?? 0}
        y={(d) => yScale(getValue(d)) ?? 0}
        curve={curveNatural}
        strokeWidth={2}
      />
      {data.map((d) => (
        <Circle r={5} cx={xScale(getDate(d))} cy={yScale(getValue(d))} />
      ))}
    </svg>
  );
}

/* cheat codes


*/
