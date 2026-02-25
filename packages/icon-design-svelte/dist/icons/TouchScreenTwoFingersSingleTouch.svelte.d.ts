import { SvelteComponent } from 'svelte';

export interface TouchScreenTwoFingersSingleTouchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TouchScreenTwoFingersSingleTouch extends SvelteComponent<TouchScreenTwoFingersSingleTouchProps> {}
