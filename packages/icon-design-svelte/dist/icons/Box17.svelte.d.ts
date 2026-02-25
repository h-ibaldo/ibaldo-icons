import { SvelteComponent } from 'svelte';

export interface Box17Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Box17 extends SvelteComponent<Box17Props> {}
