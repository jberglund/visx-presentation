import { scaleLinear } from '@visx/scale';
import { width, height } from '../config';

const getMinMax = (arr: number[]) => {
  return [Math.min(...arr), Math.max(...arr)];
};

const bars = [160, 176, 220, 125];
const paddingTop = 10;

const [minX, maxX] = getMinMax(bars);

export default function Bars() {
  const yScale = scaleLinear({
    range: [paddingTop, height - paddingTop], // svg
    domain: [minX, maxX], // values
    nice: true,
  });

  return (
    <svg height={height} width={width} xmlns="http://www.w3.org/2000/svg">
      {bars.map((i, index, { length }) => (
        <rect
          x={(width / length) * index}
          width="50"
          height={yScale(i)}
          y={height - yScale(i)}
        />
      ))}
    </svg>
  );
}

/* cheat codes


  Vad har vi löst:
  Värden är nu relativ till dimensionerna av vår SVG.

  Problem:
  Ingen padding. 

  Tips:
  Man kan också nöja sig med 0 till 100 om det går att använda procent.
*/
