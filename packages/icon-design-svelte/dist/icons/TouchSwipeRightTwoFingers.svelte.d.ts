import { SvelteComponent } from 'svelte';

export interface TouchSwipeRightTwoFingersProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TouchSwipeRightTwoFingers extends SvelteComponent<TouchSwipeRightTwoFingersProps> {}
