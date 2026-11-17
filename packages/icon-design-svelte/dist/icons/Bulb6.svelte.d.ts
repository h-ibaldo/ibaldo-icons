import { SvelteComponent } from 'svelte';

export interface Bulb6Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bulb6 extends SvelteComponent<Bulb6Props> {}
