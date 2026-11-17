import { SvelteComponent } from 'svelte';

export interface LinkMinusClipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkMinusClip extends SvelteComponent<LinkMinusClipProps> {}
