import { SvelteComponent } from 'svelte';

export interface CloudLinkTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudLinkTall extends SvelteComponent<CloudLinkTallProps> {}
