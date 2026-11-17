import { SvelteComponent } from 'svelte';

export interface LinkBrokenBurstClipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkBrokenBurstClip extends SvelteComponent<LinkBrokenBurstClipProps> {}
