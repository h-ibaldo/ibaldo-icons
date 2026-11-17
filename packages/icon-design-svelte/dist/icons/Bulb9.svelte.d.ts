import { SvelteComponent } from 'svelte';

export interface Bulb9Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bulb9 extends SvelteComponent<Bulb9Props> {}
