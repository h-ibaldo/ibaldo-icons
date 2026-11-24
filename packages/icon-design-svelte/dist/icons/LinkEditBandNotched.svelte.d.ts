import { SvelteComponent } from 'svelte';

export interface LinkEditBandNotchedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkEditBandNotched extends SvelteComponent<LinkEditBandNotchedProps> {}
