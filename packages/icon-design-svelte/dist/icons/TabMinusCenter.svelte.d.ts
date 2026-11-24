import { SvelteComponent } from 'svelte';

export interface TabMinusCenterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabMinusCenter extends SvelteComponent<TabMinusCenterProps> {}
