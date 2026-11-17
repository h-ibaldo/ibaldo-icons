import { SvelteComponent } from 'svelte';

export interface TabCheckCircleStripedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabCheckCircleStriped extends SvelteComponent<TabCheckCircleStripedProps> {}
