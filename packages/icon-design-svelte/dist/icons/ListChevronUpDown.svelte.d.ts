import { SvelteComponent } from 'svelte';

export interface ListChevronUpDownProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ListChevronUpDown extends SvelteComponent<ListChevronUpDownProps> {}
