import { SvelteComponent } from 'svelte';

export interface LinkBrokenDoubleClipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkBrokenDoubleClip extends SvelteComponent<LinkBrokenDoubleClipProps> {}
