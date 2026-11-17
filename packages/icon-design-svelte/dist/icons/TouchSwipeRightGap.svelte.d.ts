import { SvelteComponent } from 'svelte';

export interface TouchSwipeRightGapProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TouchSwipeRightGap extends SvelteComponent<TouchSwipeRightGapProps> {}
