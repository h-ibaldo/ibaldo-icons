import { SvelteComponent } from 'svelte';

export interface HouseHome5Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HouseHome5 extends SvelteComponent<HouseHome5Props> {}
