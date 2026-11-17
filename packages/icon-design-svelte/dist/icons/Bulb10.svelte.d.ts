import { SvelteComponent } from 'svelte';

export interface Bulb10Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bulb10 extends SvelteComponent<Bulb10Props> {}
