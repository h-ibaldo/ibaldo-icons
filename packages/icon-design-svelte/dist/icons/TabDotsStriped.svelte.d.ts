import { SvelteComponent } from 'svelte';

export interface TabDotsStripedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabDotsStriped extends SvelteComponent<TabDotsStripedProps> {}
