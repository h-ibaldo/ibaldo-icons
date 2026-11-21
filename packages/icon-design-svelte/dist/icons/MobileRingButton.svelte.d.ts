import { SvelteComponent } from 'svelte';

export interface MobileRingButtonProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MobileRingButton extends SvelteComponent<MobileRingButtonProps> {}
