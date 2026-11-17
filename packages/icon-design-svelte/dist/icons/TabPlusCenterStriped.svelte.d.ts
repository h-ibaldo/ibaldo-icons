import { SvelteComponent } from 'svelte';

export interface TabPlusCenterStripedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabPlusCenterStriped extends SvelteComponent<TabPlusCenterStripedProps> {}
