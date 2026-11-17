import { SvelteComponent } from 'svelte';

export interface TabChevronDoubleRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabChevronDoubleRight extends SvelteComponent<TabChevronDoubleRightProps> {}
