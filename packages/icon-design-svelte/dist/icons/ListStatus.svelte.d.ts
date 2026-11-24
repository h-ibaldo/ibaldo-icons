import { SvelteComponent } from 'svelte';

export interface ListStatusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ListStatus extends SvelteComponent<ListStatusProps> {}
