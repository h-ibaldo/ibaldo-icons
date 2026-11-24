import { SvelteComponent } from 'svelte';

export interface LinkCircleCheckClipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkCircleCheckClip extends SvelteComponent<LinkCircleCheckClipProps> {}
