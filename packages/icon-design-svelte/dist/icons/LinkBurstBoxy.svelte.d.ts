import { SvelteComponent } from 'svelte';

export interface LinkBurstBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkBurstBoxy extends SvelteComponent<LinkBurstBoxyProps> {}
