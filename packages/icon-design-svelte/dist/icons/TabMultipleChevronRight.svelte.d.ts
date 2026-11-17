import { SvelteComponent } from 'svelte';

export interface TabMultipleChevronRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TabMultipleChevronRight extends SvelteComponent<TabMultipleChevronRightProps> {}
