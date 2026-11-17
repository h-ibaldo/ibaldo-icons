import { SvelteComponent } from 'svelte';

export interface Bulb12Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bulb12 extends SvelteComponent<Bulb12Props> {}
