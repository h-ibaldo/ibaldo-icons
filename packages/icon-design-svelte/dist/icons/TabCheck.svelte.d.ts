import { SvelteComponent } from 'svelte';

export interface TabCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabCheck extends SvelteComponent<TabCheckProps> {}
