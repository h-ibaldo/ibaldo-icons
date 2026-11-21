import { SvelteComponent } from 'svelte';

export interface MobileOffButtonProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MobileOffButton extends SvelteComponent<MobileOffButtonProps> {}
