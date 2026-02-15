import { SvelteComponent } from 'svelte';

export interface Box10Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Box10 extends SvelteComponent<Box10Props> {}
