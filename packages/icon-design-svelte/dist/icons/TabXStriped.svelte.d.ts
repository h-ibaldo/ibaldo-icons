import { SvelteComponent } from 'svelte';

export interface TabXStripedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabXStriped extends SvelteComponent<TabXStripedProps> {}
