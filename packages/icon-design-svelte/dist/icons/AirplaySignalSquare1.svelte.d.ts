import { SvelteComponent } from 'svelte';

export interface AirplaySignalSquare1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AirplaySignalSquare1 extends SvelteComponent<AirplaySignalSquare1Props> {}
