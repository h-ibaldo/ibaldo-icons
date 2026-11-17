import { SvelteComponent } from 'svelte';

export interface HandSwipeLeftFourFingersProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandSwipeLeftFourFingers extends SvelteComponent<HandSwipeLeftFourFingersProps> {}
