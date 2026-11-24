import { SvelteComponent } from 'svelte';

export interface TouchTapDoubleTwoFingersProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TouchTapDoubleTwoFingers extends SvelteComponent<TouchTapDoubleTwoFingersProps> {}
