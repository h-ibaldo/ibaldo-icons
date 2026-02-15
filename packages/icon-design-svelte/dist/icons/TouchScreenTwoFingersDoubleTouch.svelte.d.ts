import { SvelteComponent } from 'svelte';

export interface TouchScreenTwoFingersDoubleTouchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TouchScreenTwoFingersDoubleTouch extends SvelteComponent<TouchScreenTwoFingersDoubleTouchProps> {}
