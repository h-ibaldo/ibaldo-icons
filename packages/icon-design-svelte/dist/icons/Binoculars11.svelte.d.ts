import { SvelteComponent } from 'svelte';

export interface Binoculars11Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Binoculars11 extends SvelteComponent<Binoculars11Props> {}
