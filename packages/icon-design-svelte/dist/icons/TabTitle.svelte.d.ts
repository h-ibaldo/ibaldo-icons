import { SvelteComponent } from 'svelte';

export interface TabTitleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabTitle extends SvelteComponent<TabTitleProps> {}
