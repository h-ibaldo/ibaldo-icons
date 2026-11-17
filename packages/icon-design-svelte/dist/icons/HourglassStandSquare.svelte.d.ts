import { SvelteComponent } from 'svelte';

export interface HourglassStandSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HourglassStandSquare extends SvelteComponent<HourglassStandSquareProps> {}
