import { SvelteComponent } from 'svelte';

export interface Bulb4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bulb4 extends SvelteComponent<Bulb4Props> {}
