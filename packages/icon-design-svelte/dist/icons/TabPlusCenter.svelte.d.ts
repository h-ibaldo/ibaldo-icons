import { SvelteComponent } from 'svelte';

export interface TabPlusCenterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabPlusCenter extends SvelteComponent<TabPlusCenterProps> {}
