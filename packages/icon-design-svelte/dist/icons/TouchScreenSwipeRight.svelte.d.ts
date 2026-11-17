import { SvelteComponent } from 'svelte';

export interface TouchScreenSwipeRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TouchScreenSwipeRight extends SvelteComponent<TouchScreenSwipeRightProps> {}
