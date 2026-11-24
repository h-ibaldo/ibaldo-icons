import { SvelteComponent } from 'svelte';

export interface StarMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StarMinus extends SvelteComponent<StarMinusProps> {}
