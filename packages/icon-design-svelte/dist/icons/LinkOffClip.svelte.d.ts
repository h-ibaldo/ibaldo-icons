import { SvelteComponent } from 'svelte';

export interface LinkOffClipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkOffClip extends SvelteComponent<LinkOffClipProps> {}
