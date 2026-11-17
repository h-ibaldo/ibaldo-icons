import { SvelteComponent } from 'svelte';

export interface TabArrowRightXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabArrowRightX extends SvelteComponent<TabArrowRightXProps> {}
