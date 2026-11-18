import { SvelteComponent } from 'svelte';

export interface LinkCircleClipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkCircleClip extends SvelteComponent<LinkCircleClipProps> {}
