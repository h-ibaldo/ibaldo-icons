import { SvelteComponent } from 'svelte';

export interface Binoculars12Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Binoculars12 extends SvelteComponent<Binoculars12Props> {}
