import { SvelteComponent } from 'svelte';

export interface Bulb11Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bulb11 extends SvelteComponent<Bulb11Props> {}
