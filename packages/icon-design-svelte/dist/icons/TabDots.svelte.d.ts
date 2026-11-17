import { SvelteComponent } from 'svelte';

export interface TabDotsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabDots extends SvelteComponent<TabDotsProps> {}
