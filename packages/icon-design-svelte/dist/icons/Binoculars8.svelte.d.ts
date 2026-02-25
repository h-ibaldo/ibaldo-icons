import { SvelteComponent } from 'svelte';

export interface Binoculars8Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Binoculars8 extends SvelteComponent<Binoculars8Props> {}
