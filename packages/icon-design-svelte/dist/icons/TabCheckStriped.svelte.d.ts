import { SvelteComponent } from 'svelte';

export interface TabCheckStripedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabCheckStriped extends SvelteComponent<TabCheckStripedProps> {}
