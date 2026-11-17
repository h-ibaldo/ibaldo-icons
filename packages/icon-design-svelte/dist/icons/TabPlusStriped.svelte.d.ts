import { SvelteComponent } from 'svelte';

export interface TabPlusStripedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabPlusStriped extends SvelteComponent<TabPlusStripedProps> {}
