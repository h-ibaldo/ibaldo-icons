import { SvelteComponent } from 'svelte';

export interface ListChevronLeftProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ListChevronLeft extends SvelteComponent<ListChevronLeftProps> {}
