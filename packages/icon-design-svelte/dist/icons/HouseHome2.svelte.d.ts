import { SvelteComponent } from 'svelte';

export interface HouseHome2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HouseHome2 extends SvelteComponent<HouseHome2Props> {}
