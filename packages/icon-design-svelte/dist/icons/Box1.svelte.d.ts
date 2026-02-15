import { SvelteComponent } from 'svelte';

export interface Box1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Box1 extends SvelteComponent<Box1Props> {}
