import { SvelteComponent } from 'svelte';

export interface TabCloseXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabCloseX extends SvelteComponent<TabCloseXProps> {}
