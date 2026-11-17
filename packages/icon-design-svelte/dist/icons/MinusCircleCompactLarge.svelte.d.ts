import { SvelteComponent } from 'svelte';

export interface MinusCircleCompactLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MinusCircleCompactLarge extends SvelteComponent<MinusCircleCompactLargeProps> {}
