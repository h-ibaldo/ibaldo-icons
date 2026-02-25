import { SvelteComponent } from 'svelte';

export interface ShareArrowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ShareArrow extends SvelteComponent<ShareArrowProps> {}
