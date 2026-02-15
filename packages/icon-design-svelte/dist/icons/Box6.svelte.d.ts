import { SvelteComponent } from 'svelte';

export interface Box6Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Box6 extends SvelteComponent<Box6Props> {}
