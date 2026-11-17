import { SvelteComponent } from 'svelte';

export interface CursorUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CursorUp extends SvelteComponent<CursorUpProps> {}
