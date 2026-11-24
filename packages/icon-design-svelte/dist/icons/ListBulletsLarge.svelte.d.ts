import { SvelteComponent } from 'svelte';

export interface ListBulletsLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ListBulletsLarge extends SvelteComponent<ListBulletsLargeProps> {}
