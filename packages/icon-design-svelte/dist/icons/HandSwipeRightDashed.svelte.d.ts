import { SvelteComponent } from 'svelte';

export interface HandSwipeRightDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandSwipeRightDashed extends SvelteComponent<HandSwipeRightDashedProps> {}
