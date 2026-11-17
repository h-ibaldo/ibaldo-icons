import { SvelteComponent } from 'svelte';

export interface Bulb16Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bulb16 extends SvelteComponent<Bulb16Props> {}
