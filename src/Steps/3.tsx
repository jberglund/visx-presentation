import { LinearGradient, RadialGradient } from '@visx/gradient';
import { scaleBand, scaleLinear } from '@visx/scale';
import { width, height } from '../config';

const getMinMax = (arr: number[]) => {
  return [Math.min(...arr), Math.max(...arr)];
};

type Bars = {
  value: number;
  label: string;
};

const bars: Bars[] = [
  { value: 160, label: 'A' },
  { value: 176, label: 'B' },
  { value: 220, label: 'C' },
  { value: 155, label: 'D' },
  { value: 321, label: 'E' },
  { value: 245, label: 'F' },
  { value: 222, label: 'G' },
];

const getValue = (i: Bars) => i.value;
const getLabel = (i: Bars) => i.label;

const paddingTop = 10;

const [minX, maxX] = getMinMax(bars.map(getValue));

export default function Bars() {
  const yScale = scaleLinear({
    range: [paddingTop, height - paddingTop], // svg
    domain: [minX, maxX], // values
    nice: true,
  });

  const xScale = scaleBand({
    range: [0, width],
    domain: bars.map(getLabel),
    padding: 0.25, // styr bredd också
    align: 0.5,
    round: true,
  });

  return (
    <svg height={height} width={width} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <LinearGradient
          id={'gradient'}
          from="var(--color-red)"
          to="rgba(45, 40, 39, 0.2)"
        />
      </defs>
      {bars.map(({ label, value }) => (
        <rect
          x={xScale(label)}
          width={xScale.bandwidth()} // sista hårdkodade värdet
          height={yScale(value)}
          y={height - yScale(value)}
          fill="url(#gradient)"
          rx="8"
        />
      ))}
    </svg>
  );
}

/* cheat codes


  Vad har vi löst:
  Alla värden är nu relativa.
  Bars är centrerat! Win!

*/
