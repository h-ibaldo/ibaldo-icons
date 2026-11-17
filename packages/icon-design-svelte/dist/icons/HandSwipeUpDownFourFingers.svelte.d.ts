import { SvelteComponent } from 'svelte';

export interface HandSwipeUpDownFourFingersProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandSwipeUpDownFourFingers extends SvelteComponent<HandSwipeUpDownFourFingersProps> {}
