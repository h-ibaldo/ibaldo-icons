import { SvelteComponent } from 'svelte';

export interface TabCheckCenterStripedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabCheckCenterStriped extends SvelteComponent<TabCheckCenterStripedProps> {}
