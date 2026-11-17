import { SvelteComponent } from 'svelte';

export interface WheelchairSquare2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WheelchairSquare2 extends SvelteComponent<WheelchairSquare2Props> {}
