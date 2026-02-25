import { SvelteComponent } from 'svelte';

export interface Binoculars3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Binoculars3 extends SvelteComponent<Binoculars3Props> {}
