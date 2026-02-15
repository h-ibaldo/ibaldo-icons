import { SvelteComponent } from 'svelte';

export interface TouchScreenSingleTouchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TouchScreenSingleTouch extends SvelteComponent<TouchScreenSingleTouchProps> {}
