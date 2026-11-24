import { SvelteComponent } from 'svelte';

export interface BagTaperedDotsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BagTaperedDots extends SvelteComponent<BagTaperedDotsProps> {}
