import { SvelteComponent } from 'svelte';

export interface HandTapTwoTwoFingersProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandTapTwoTwoFingers extends SvelteComponent<HandTapTwoTwoFingersProps> {}
