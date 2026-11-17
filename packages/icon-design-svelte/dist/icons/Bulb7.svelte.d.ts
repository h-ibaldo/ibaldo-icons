import { SvelteComponent } from 'svelte';

export interface Bulb7Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bulb7 extends SvelteComponent<Bulb7Props> {}
