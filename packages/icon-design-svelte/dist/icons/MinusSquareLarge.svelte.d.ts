import { SvelteComponent } from 'svelte';

export interface MinusSquareLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MinusSquareLarge extends SvelteComponent<MinusSquareLargeProps> {}
