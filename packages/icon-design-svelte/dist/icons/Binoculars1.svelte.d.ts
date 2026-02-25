import { SvelteComponent } from 'svelte';

export interface Binoculars1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Binoculars1 extends SvelteComponent<Binoculars1Props> {}
