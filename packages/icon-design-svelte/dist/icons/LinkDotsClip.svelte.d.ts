import { SvelteComponent } from 'svelte';

export interface LinkDotsClipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkDotsClip extends SvelteComponent<LinkDotsClipProps> {}
