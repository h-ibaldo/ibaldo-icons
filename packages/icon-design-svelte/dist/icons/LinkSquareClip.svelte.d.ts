import { SvelteComponent } from 'svelte';

export interface LinkSquareClipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkSquareClip extends SvelteComponent<LinkSquareClipProps> {}
