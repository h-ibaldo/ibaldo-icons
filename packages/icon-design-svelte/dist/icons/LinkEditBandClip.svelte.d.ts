import { SvelteComponent } from 'svelte';

export interface LinkEditBandClipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkEditBandClip extends SvelteComponent<LinkEditBandClipProps> {}
