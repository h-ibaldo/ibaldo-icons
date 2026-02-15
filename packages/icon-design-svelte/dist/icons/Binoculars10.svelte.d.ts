import { SvelteComponent } from 'svelte';

export interface Binoculars10Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Binoculars10 extends SvelteComponent<Binoculars10Props> {}
