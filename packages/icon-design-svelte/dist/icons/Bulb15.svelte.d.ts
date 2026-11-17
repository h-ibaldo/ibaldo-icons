import { SvelteComponent } from 'svelte';

export interface Bulb15Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bulb15 extends SvelteComponent<Bulb15Props> {}
