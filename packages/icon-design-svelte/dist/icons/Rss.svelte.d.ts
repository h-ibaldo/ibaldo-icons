import { SvelteComponent } from 'svelte';

export interface RssProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Rss extends SvelteComponent<RssProps> {}
