import { SvelteComponent } from 'svelte';

export interface HandTapOneTwoFingersProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandTapOneTwoFingers extends SvelteComponent<HandTapOneTwoFingersProps> {}
