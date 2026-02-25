import { SvelteComponent } from 'svelte';

export interface Binoculars4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Binoculars4 extends SvelteComponent<Binoculars4Props> {}
