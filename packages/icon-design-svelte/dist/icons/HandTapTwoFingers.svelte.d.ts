import { SvelteComponent } from 'svelte';

export interface HandTapTwoFingersProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandTapTwoFingers extends SvelteComponent<HandTapTwoFingersProps> {}
