import { SvelteComponent } from 'svelte';

export interface HandSwipeLeftRightFourFingersProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandSwipeLeftRightFourFingers extends SvelteComponent<HandSwipeLeftRightFourFingersProps> {}
