import { SvelteComponent } from 'svelte';

export interface CompassMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CompassMinus extends SvelteComponent<CompassMinusProps> {}
