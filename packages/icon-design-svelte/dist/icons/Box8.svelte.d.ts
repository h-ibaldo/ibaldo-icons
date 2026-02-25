import { SvelteComponent } from 'svelte';

export interface Box8Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Box8 extends SvelteComponent<Box8Props> {}
