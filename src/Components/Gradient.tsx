import { LinearGradient, RadialGradient } from '@visx/gradient';

export const one = (id: string) => (
  <LinearGradient id={id} from="#351CAB" to="#621A61" rotate="-45" />
);

export const two = (id: string) => (
  <RadialGradient id={id} from="#55bdd5" to="#4f3681" r="80%" />
);
