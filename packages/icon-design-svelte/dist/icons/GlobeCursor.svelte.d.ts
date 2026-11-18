import { SvelteComponent } from 'svelte';

export interface GlobeCursorProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GlobeCursor extends SvelteComponent<GlobeCursorProps> {}
