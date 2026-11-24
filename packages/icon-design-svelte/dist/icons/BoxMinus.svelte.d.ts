import { SvelteComponent } from 'svelte';

export interface BoxMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BoxMinus extends SvelteComponent<BoxMinusProps> {}
