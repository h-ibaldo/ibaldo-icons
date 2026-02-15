import { SvelteComponent } from 'svelte';

export interface Box9Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Box9 extends SvelteComponent<Box9Props> {}
