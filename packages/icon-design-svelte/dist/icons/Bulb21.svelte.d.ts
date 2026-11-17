import { SvelteComponent } from 'svelte';

export interface Bulb21Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bulb21 extends SvelteComponent<Bulb21Props> {}
