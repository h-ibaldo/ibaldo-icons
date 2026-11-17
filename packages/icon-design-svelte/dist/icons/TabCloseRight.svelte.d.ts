import { SvelteComponent } from 'svelte';

export interface TabCloseRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabCloseRight extends SvelteComponent<TabCloseRightProps> {}
