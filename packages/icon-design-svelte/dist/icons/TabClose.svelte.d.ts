import { SvelteComponent } from 'svelte';

export interface TabCloseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabClose extends SvelteComponent<TabCloseProps> {}
