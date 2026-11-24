import { SvelteComponent } from 'svelte';

export interface BoxFrontMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BoxFrontMinus extends SvelteComponent<BoxFrontMinusProps> {}
