import { SvelteComponent } from 'svelte';

export interface TouchScreenDoubleTouchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TouchScreenDoubleTouch extends SvelteComponent<TouchScreenDoubleTouchProps> {}
