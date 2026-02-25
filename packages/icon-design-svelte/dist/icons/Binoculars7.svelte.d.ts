import { SvelteComponent } from 'svelte';

export interface Binoculars7Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Binoculars7 extends SvelteComponent<Binoculars7Props> {}
