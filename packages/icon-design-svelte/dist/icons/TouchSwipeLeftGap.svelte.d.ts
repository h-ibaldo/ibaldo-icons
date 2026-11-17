import { SvelteComponent } from 'svelte';

export interface TouchSwipeLeftGapProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TouchSwipeLeftGap extends SvelteComponent<TouchSwipeLeftGapProps> {}
