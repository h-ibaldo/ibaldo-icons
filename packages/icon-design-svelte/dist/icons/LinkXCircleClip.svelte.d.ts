import { SvelteComponent } from 'svelte';

export interface LinkXCircleClipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkXCircleClip extends SvelteComponent<LinkXCircleClipProps> {}
