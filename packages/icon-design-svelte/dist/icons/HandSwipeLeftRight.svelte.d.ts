import { SvelteComponent } from 'svelte';

export interface HandSwipeLeftRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandSwipeLeftRight extends SvelteComponent<HandSwipeLeftRightProps> {}
