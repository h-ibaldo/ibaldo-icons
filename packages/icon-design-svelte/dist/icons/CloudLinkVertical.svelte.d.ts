import { SvelteComponent } from 'svelte';

export interface CloudLinkVerticalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudLinkVertical extends SvelteComponent<CloudLinkVerticalProps> {}
