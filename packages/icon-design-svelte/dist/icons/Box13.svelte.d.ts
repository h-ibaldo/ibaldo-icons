import { SvelteComponent } from 'svelte';

export interface Box13Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Box13 extends SvelteComponent<Box13Props> {}
