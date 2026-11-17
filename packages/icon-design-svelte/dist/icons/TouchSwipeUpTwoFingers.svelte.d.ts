import { SvelteComponent } from 'svelte';

export interface TouchSwipeUpTwoFingersProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TouchSwipeUpTwoFingers extends SvelteComponent<TouchSwipeUpTwoFingersProps> {}
