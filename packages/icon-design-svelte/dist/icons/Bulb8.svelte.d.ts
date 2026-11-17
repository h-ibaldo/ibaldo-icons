import { SvelteComponent } from 'svelte';

export interface Bulb8Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bulb8 extends SvelteComponent<Bulb8Props> {}
