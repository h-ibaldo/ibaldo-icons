import { SvelteComponent } from 'svelte';

export interface TabMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabMinus extends SvelteComponent<TabMinusProps> {}
