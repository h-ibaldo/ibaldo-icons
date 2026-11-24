import { SvelteComponent } from 'svelte';

export interface HandSwipeLeftDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandSwipeLeftDashed extends SvelteComponent<HandSwipeLeftDashedProps> {}
