import { SvelteComponent } from 'svelte';

export interface Binoculars9Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Binoculars9 extends SvelteComponent<Binoculars9Props> {}
