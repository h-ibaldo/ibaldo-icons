import { SvelteComponent } from 'svelte';

export interface CursorRippleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CursorRipple extends SvelteComponent<CursorRippleProps> {}
