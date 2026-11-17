import { SvelteComponent } from 'svelte';

export interface TouchSwipeUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TouchSwipeUp extends SvelteComponent<TouchSwipeUpProps> {}
