import { scaleBand, scaleTime } from '@visx/scale';
import { Grid } from '@visx/grid';
import { GridRows, GridColumns } from '@visx/grid';
import { getMinMax } from '../helpers';
import { width, height, employees, Employee } from '../config';
import { AxisLeft } from '@visx/axis';

const getDate = (i: Employee) => i.date.valueOf();
const getMonth = (i: Employee) => i.date.getMonth();

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('default', { month: 'numeric' });

const [minX, maxX] = getMinMax(employees.map(getDate));
//const [minY, maxY] = getMinMax(employees.map(getMonth));

export default function Bars() {
  const xScale = scaleTime({
    range: [0, width],
    domain: [minX, maxX],
    round: true,
  });

  const yScale = scaleTime({
    range: [0, height],
    domain: [0, 12],
  });

  return (
    <svg height={height} width={width} xmlns="http://www.w3.org/2000/svg">
      <Grid
        xScale={xScale}
        yScale={yScale}
        width={width}
        height={height}
        numTicksRows={12}
        numTicksColumns={0}
        strokeOpacity="0.1"
      />
      {employees.map((i) => (
        <circle
          cx={xScale(getDate(i))}
          cy={yScale(getMonth(i))}
          r="5"
          fill="currentColor"
        />
      ))}
    </svg>
  );
}
