import { SvelteComponent } from 'svelte';

export interface Bulb17Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bulb17 extends SvelteComponent<Bulb17Props> {}
