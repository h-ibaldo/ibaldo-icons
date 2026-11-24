import { SvelteComponent } from 'svelte';

export interface TouchSwipeLeftTwoFingersProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TouchSwipeLeftTwoFingers extends SvelteComponent<TouchSwipeLeftTwoFingersProps> {}
