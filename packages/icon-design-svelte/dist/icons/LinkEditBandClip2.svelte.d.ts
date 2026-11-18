import { SvelteComponent } from 'svelte';

export interface LinkEditBandClip2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkEditBandClip2 extends SvelteComponent<LinkEditBandClip2Props> {}
