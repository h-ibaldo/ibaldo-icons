import { SvelteComponent } from 'svelte';

export interface Bulb19Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bulb19 extends SvelteComponent<Bulb19Props> {}
