import { SvelteComponent } from 'svelte';

export interface CursorUpRippleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CursorUpRipple extends SvelteComponent<CursorUpRippleProps> {}
