import { SvelteComponent } from 'svelte';

export interface CursorProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cursor extends SvelteComponent<CursorProps> {}
