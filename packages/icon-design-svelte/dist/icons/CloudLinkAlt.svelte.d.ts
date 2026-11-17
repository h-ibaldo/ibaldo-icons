import { SvelteComponent } from 'svelte';

export interface CloudLinkAltProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudLinkAlt extends SvelteComponent<CloudLinkAltProps> {}
