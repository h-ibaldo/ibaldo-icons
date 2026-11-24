import { SvelteComponent } from 'svelte';

export interface HandMoveTwoFingersProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandMoveTwoFingers extends SvelteComponent<HandMoveTwoFingersProps> {}
