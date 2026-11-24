import { SvelteComponent } from 'svelte';

export interface MobileBoltButtonProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MobileBoltButton extends SvelteComponent<MobileBoltButtonProps> {}
