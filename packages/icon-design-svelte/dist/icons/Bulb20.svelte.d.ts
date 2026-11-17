import { SvelteComponent } from 'svelte';

export interface Bulb20Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bulb20 extends SvelteComponent<Bulb20Props> {}
