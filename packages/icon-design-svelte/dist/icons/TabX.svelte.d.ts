import { SvelteComponent } from 'svelte';

export interface TabXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabX extends SvelteComponent<TabXProps> {}
