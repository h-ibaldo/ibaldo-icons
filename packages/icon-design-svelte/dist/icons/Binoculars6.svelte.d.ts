import { SvelteComponent } from 'svelte';

export interface Binoculars6Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Binoculars6 extends SvelteComponent<Binoculars6Props> {}
