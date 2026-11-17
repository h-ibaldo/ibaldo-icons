import { SvelteComponent } from 'svelte';

export interface HandSwipeDownFourFingersProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandSwipeDownFourFingers extends SvelteComponent<HandSwipeDownFourFingersProps> {}
