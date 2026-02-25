import { SvelteComponent } from 'svelte';

export interface Binoculars5Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Binoculars5 extends SvelteComponent<Binoculars5Props> {}
