import { SvelteComponent } from 'svelte';

export interface ListCursorProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ListCursor extends SvelteComponent<ListCursorProps> {}
