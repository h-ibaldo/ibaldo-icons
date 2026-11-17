import { SvelteComponent } from 'svelte';

export interface SortOneTwoDownProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SortOneTwoDown extends SvelteComponent<SortOneTwoDownProps> {}
