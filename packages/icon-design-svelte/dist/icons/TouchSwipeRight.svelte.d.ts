import { SvelteComponent } from 'svelte';

export interface TouchSwipeRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TouchSwipeRight extends SvelteComponent<TouchSwipeRightProps> {}
