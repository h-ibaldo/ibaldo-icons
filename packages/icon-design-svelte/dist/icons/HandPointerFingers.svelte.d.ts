import { SvelteComponent } from 'svelte';

export interface HandPointerFingersProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandPointerFingers extends SvelteComponent<HandPointerFingersProps> {}
