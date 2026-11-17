import { SvelteComponent } from 'svelte';

export interface TouchSwipeDownGapProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TouchSwipeDownGap extends SvelteComponent<TouchSwipeDownGapProps> {}
