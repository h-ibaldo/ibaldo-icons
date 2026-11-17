import { SvelteComponent } from 'svelte';

export interface AirplaySignalSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AirplaySignalSquare extends SvelteComponent<AirplaySignalSquareProps> {}
