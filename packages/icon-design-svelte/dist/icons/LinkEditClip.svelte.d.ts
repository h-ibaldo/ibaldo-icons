import { SvelteComponent } from 'svelte';

export interface LinkEditClipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkEditClip extends SvelteComponent<LinkEditClipProps> {}
