import { SvelteComponent } from 'svelte';

export interface ListChevronRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ListChevronRight extends SvelteComponent<ListChevronRightProps> {}
