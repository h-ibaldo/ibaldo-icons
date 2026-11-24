import { SvelteComponent } from 'svelte';

export interface WheelchairSquare3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WheelchairSquare3 extends SvelteComponent<WheelchairSquare3Props> {}
