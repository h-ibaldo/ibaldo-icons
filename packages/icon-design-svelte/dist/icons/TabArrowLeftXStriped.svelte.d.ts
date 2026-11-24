import { SvelteComponent } from 'svelte';

export interface TabArrowLeftXStripedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabArrowLeftXStriped extends SvelteComponent<TabArrowLeftXStripedProps> {}
