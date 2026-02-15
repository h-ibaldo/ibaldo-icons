import { SvelteComponent } from 'svelte';

export interface HouseHome4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HouseHome4 extends SvelteComponent<HouseHome4Props> {}
