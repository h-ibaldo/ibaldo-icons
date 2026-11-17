import { SvelteComponent } from 'svelte';

export interface LinkPlusClipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkPlusClip extends SvelteComponent<LinkPlusClipProps> {}
