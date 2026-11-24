import { SvelteComponent } from 'svelte';

export interface ListCircleXTopProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ListCircleXTop extends SvelteComponent<ListCircleXTopProps> {}
