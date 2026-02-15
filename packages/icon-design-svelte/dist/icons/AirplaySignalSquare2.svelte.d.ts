import { SvelteComponent } from 'svelte';

export interface AirplaySignalSquare2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AirplaySignalSquare2 extends SvelteComponent<AirplaySignalSquare2Props> {}
