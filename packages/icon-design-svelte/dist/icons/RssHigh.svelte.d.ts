import { SvelteComponent } from 'svelte';

export interface RssHighProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class RssHigh extends SvelteComponent<RssHighProps> {}
