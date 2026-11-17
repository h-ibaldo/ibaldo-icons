import { SvelteComponent } from 'svelte';

export interface Bulb13Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bulb13 extends SvelteComponent<Bulb13Props> {}
