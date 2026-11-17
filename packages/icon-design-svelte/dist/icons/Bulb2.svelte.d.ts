import { SvelteComponent } from 'svelte';

export interface Bulb2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bulb2 extends SvelteComponent<Bulb2Props> {}
