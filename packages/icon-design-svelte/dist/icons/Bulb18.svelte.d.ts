import { SvelteComponent } from 'svelte';

export interface Bulb18Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bulb18 extends SvelteComponent<Bulb18Props> {}
