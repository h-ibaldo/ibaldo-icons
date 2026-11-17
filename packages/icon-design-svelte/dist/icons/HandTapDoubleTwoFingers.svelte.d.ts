import { SvelteComponent } from 'svelte';

export interface HandTapDoubleTwoFingersProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandTapDoubleTwoFingers extends SvelteComponent<HandTapDoubleTwoFingersProps> {}
