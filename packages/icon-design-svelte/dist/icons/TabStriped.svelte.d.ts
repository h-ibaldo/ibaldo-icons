import { SvelteComponent } from 'svelte';

export interface TabStripedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabStriped extends SvelteComponent<TabStripedProps> {}
