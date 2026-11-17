import { SvelteComponent } from 'svelte';

export interface LinkCheckClipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkCheckClip extends SvelteComponent<LinkCheckClipProps> {}
