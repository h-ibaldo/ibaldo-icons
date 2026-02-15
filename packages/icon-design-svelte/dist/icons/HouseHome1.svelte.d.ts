import { SvelteComponent } from 'svelte';

export interface HouseHome1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HouseHome1 extends SvelteComponent<HouseHome1Props> {}
