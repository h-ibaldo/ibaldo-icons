import { SvelteComponent } from 'svelte';

export interface TabCloseLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabCloseLeft extends SvelteComponent<TabCloseLeftProps> {}
