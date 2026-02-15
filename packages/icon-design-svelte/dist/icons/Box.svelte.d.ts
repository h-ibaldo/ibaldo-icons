import { SvelteComponent } from 'svelte';

export interface BoxProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Box extends SvelteComponent<BoxProps> {}
