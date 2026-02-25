import { SvelteComponent } from 'svelte';

export interface HouseHome3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HouseHome3 extends SvelteComponent<HouseHome3Props> {}
