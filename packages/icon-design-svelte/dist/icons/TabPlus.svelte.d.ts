import { SvelteComponent } from 'svelte';

export interface TabPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabPlus extends SvelteComponent<TabPlusProps> {}
