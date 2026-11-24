import { SvelteComponent } from 'svelte';

export interface TabMinusCircleStripedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabMinusCircleStriped extends SvelteComponent<TabMinusCircleStripedProps> {}
