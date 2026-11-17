import { SvelteComponent } from 'svelte';

export interface TabPlusCircleStripedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabPlusCircleStriped extends SvelteComponent<TabPlusCircleStripedProps> {}
