import { SvelteComponent } from 'svelte';

export interface ShareArrowBoxProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ShareArrowBox extends SvelteComponent<ShareArrowBoxProps> {}
