import { SvelteComponent } from 'svelte';

export interface TouchScreenSwipeUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TouchScreenSwipeUp extends SvelteComponent<TouchScreenSwipeUpProps> {}
