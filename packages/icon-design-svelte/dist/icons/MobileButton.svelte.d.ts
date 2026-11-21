import { SvelteComponent } from 'svelte';

export interface MobileButtonProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MobileButton extends SvelteComponent<MobileButtonProps> {}
