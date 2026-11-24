import { SvelteComponent } from 'svelte';

export interface LinkMenuClipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkMenuClip extends SvelteComponent<LinkMenuClipProps> {}
