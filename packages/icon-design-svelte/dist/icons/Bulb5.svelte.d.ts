import { SvelteComponent } from 'svelte';

export interface Bulb5Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bulb5 extends SvelteComponent<Bulb5Props> {}
