import { SvelteComponent } from 'svelte';

export interface Scan1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Scan1 extends SvelteComponent<Scan1Props> {}
