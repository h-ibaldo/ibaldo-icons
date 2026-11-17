import { SvelteComponent } from 'svelte';

export interface LinkCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkCheck extends SvelteComponent<LinkCheckProps> {}
