import { SvelteComponent } from 'svelte';

export interface SquareStackLinkClipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareStackLinkClip extends SvelteComponent<SquareStackLinkClipProps> {}
