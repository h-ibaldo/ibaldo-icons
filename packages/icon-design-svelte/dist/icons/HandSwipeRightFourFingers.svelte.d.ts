import { SvelteComponent } from 'svelte';

export interface HandSwipeRightFourFingersProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandSwipeRightFourFingers extends SvelteComponent<HandSwipeRightFourFingersProps> {}
