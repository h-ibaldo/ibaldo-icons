import { SvelteComponent } from 'svelte';

export interface TouchSwipeUpGapProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TouchSwipeUpGap extends SvelteComponent<TouchSwipeUpGapProps> {}
