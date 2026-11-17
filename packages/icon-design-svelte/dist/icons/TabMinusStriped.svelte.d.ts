import { SvelteComponent } from 'svelte';

export interface TabMinusStripedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabMinusStriped extends SvelteComponent<TabMinusStripedProps> {}
