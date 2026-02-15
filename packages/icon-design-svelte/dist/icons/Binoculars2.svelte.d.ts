import { SvelteComponent } from 'svelte';

export interface Binoculars2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Binoculars2 extends SvelteComponent<Binoculars2Props> {}
