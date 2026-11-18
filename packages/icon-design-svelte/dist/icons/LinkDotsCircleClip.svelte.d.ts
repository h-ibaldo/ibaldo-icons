import { SvelteComponent } from 'svelte';

export interface LinkDotsCircleClipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkDotsCircleClip extends SvelteComponent<LinkDotsCircleClipProps> {}
