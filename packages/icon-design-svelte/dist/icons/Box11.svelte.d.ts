import { SvelteComponent } from 'svelte';

export interface Box11Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Box11 extends SvelteComponent<Box11Props> {}
