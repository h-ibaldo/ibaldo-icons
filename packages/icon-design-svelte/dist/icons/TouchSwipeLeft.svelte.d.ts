import { SvelteComponent } from 'svelte';

export interface TouchSwipeLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TouchSwipeLeft extends SvelteComponent<TouchSwipeLeftProps> {}
