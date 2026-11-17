import { SvelteComponent } from 'svelte';

export interface MinusCircleLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MinusCircleLarge extends SvelteComponent<MinusCircleLargeProps> {}
