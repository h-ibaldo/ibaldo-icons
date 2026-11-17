import { SvelteComponent } from 'svelte';

export interface TouchSwipeDownTwoFingersProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TouchSwipeDownTwoFingers extends SvelteComponent<TouchSwipeDownTwoFingersProps> {}
