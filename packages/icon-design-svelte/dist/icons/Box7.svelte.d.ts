import { SvelteComponent } from 'svelte';

export interface Box7Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Box7 extends SvelteComponent<Box7Props> {}
