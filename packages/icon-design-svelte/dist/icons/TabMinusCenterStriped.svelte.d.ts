import { SvelteComponent } from 'svelte';

export interface TabMinusCenterStripedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabMinusCenterStriped extends SvelteComponent<TabMinusCenterStripedProps> {}
