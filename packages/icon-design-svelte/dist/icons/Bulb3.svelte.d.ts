import { SvelteComponent } from 'svelte';

export interface Bulb3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bulb3 extends SvelteComponent<Bulb3Props> {}
