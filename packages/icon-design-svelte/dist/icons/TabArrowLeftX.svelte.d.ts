import { SvelteComponent } from 'svelte';

export interface TabArrowLeftXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabArrowLeftX extends SvelteComponent<TabArrowLeftXProps> {}
