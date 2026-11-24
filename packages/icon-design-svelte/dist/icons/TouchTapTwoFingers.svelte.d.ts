import { SvelteComponent } from 'svelte';

export interface TouchTapTwoFingersProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TouchTapTwoFingers extends SvelteComponent<TouchTapTwoFingersProps> {}
