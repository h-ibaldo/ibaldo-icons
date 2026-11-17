import { SvelteComponent } from 'svelte';

export interface LinkPlusCircleClipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkPlusCircleClip extends SvelteComponent<LinkPlusCircleClipProps> {}
