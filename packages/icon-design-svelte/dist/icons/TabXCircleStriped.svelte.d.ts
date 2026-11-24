import { SvelteComponent } from 'svelte';

export interface TabXCircleStripedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabXCircleStriped extends SvelteComponent<TabXCircleStripedProps> {}
