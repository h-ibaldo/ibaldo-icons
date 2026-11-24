import { SvelteComponent } from 'svelte';

export interface TouchSwipeUpTwoFingersGapProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TouchSwipeUpTwoFingersGap extends SvelteComponent<TouchSwipeUpTwoFingersGapProps> {}
